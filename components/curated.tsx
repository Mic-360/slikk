'use client';

import { buttonVariants } from '@/components/ui/button';
import type { CuratedItem, CuratedTrack } from '@/lib/const';
import { CURATED_TRACKS } from '@/lib/const';
import { cn } from '@/lib/utils';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, type FC } from 'react';

const CuratedTrackPanel: FC<{ track: CuratedTrack }> = ({ track }) => {
  const panelRef = useRef<HTMLElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [supportsHover, setSupportsHover] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  const [isMdUp, setIsMdUp] = useState(false);

  useEffect(() => {
    const hoverMedia = window.matchMedia('(hover: hover) and (pointer: fine)');
    const mdMedia = window.matchMedia('(min-width: 768px)');
    const sync = () => {
      setSupportsHover(hoverMedia.matches);
      setIsMdUp(mdMedia.matches);
    };

    sync();
    hoverMedia.addEventListener('change', sync);
    mdMedia.addEventListener('change', sync);

    return () => {
      hoverMedia.removeEventListener('change', sync);
      mdMedia.removeEventListener('change', sync);
    };
  }, []);

  useEffect(() => {
    const node = panelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      {
        threshold: 0.45,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const shouldSpread = supportsHover ? isHovered : isInView;
  const cardWidth = isMdUp ? 208 : 144;
  const spreadStep = isMdUp ? 244 : 172;
  const spreadWidth = cardWidth + spreadStep * (track.items.length - 1);

  const scrollMiniCards = (direction: 'left' | 'right') => {
    const node = scrollAreaRef.current;
    if (!node) return;

    const amount = Math.max(cardWidth + 24, spreadStep * 0.72);
    node.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  const getStackedTransform = (index: number) => {
    const x = -(index % 2) * 3;
    const y = 0;
    const rotate = 0;

    return `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
  };

  const getSpreadTransform = (index: number) => {
    const x = -index * spreadStep;
    const y = 0;
    const rotate = 0;

    return `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
  };

  const renderMiniCard = (item: CuratedItem, linkClassName?: string) => {
    return (
      <Link
        href={item.href}
        className={cn('group/item block', linkClassName)}
      >
        <div className='relative aspect-4/5 overflow-hidden rounded-2xl border border-white/30 bg-black/20 backdrop-blur-[2px] transition-[box-shadow,transform] duration-500 group-hover/item:-translate-y-1'>
          <Image
            src={item.image}
            alt={item.name}
            fill
            className='object-center transition-transform duration-500 ease-out group-hover/item:scale-110'
            sizes='(min-width: 768px) 208px, 144px'
          />
          <div className='absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent' />
        </div>
      </Link>
    );
  };

  return (
    <article
      ref={panelRef}
      id={`curated-${track.id}`}
      className='group relative isolate min-h-117.5 overflow-hidden scroll-mt-24'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='absolute inset-0'>
        <Image
          src={track.heroImage}
          alt={track.heroAlt}
          fill
          className='object-center'
          sizes='100vw'
          priority={track.id === 'for-her'}
        />
      </div>

      <div className='relative z-20 flex h-full w-full flex-col justify-between p-5 md:p-8 lg:p-10'>
        <div className='flex max-w-2xl items-center gap-3 md:gap-4'>
          <p
            className={cn(
              'text-[10px] font-black uppercase tracking-[0.18em] text-white/70 transition-opacity duration-500 md:text-xs',
              shouldSpread ? 'opacity-100' : 'opacity-0 md:opacity-100',
            )}
          >
            {supportsHover
              ? 'Hover to reveal curated categories'
              : 'Auto-spread on scroll'}
          </p>
        </div>
      </div>

      <div className='absolute inset-x-0 bottom-4 z-30 px-3 md:px-10'>
        <div className='relative'>
          {shouldSpread && (
            <>
              <button
                type='button'
                aria-label='Scroll curated cards left'
                onClick={() => scrollMiniCards('left')}
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'icon-sm' }),
                  'absolute top-1/2 left-1 z-20 -translate-y-1/2 border-white/50 bg-black/55 text-white backdrop-blur-sm hover:bg-white hover:text-black md:size-10',
                )}
              >
                <IconChevronLeft data-icon='inline-start' />
              </button>

              <button
                type='button'
                aria-label='Scroll curated cards right'
                onClick={() => scrollMiniCards('right')}
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'icon-sm' }),
                  'absolute top-1/2 right-1 z-20 -translate-y-1/2 border-white/50 bg-black/55 text-white backdrop-blur-sm hover:bg-white hover:text-black md:size-10',
                )}
              >
                <IconChevronRight data-icon='inline-end' />
              </button>
            </>
          )}

          <div
            ref={scrollAreaRef}
            className={cn(
              'no-scrollbar ml-auto max-w-full overflow-y-hidden touch-pan-x scroll-smooth',
              shouldSpread ? 'overflow-x-auto' : 'overflow-x-hidden',
            )}
          >
            <div
              className='relative ml-auto h-50 w-36 md:h-72 md:w-52'
              style={shouldSpread ? { width: `${spreadWidth}px` } : undefined}
            >
              {track.items.map((item, index) => (
                <div
                  key={item.id}
                  className='absolute right-0 bottom-0 w-36 transition-[transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:w-52'
                  style={{
                    transform: shouldSpread
                      ? getSpreadTransform(index)
                      : getStackedTransform(index),
                    zIndex: shouldSpread
                      ? track.items.length - index
                      : index + 1,
                  }}
                >
                  {renderMiniCard(item)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const Curated: FC = () => {
  return (
    <section
      id='curated'
      className='w-full scroll-mt-24'
    >
      <div className='flex flex-col gap-2 px-4 md:px-6 py-6 md:py-12'>
        <h2 className='text-3xl font-black tracking-tighter uppercase md:text-5xl'>
          Her Picks & His Essentials
        </h2>
        <p className='text-xs font-black uppercase tracking-wider text-muted-foreground/80 md:text-xs'>
          A cleaner, faster way to shop the most-loved edits.
        </p>
      </div>

      <div className='mt-4 flex flex-col gap-6 md:gap-8'>
        {CURATED_TRACKS.map((track) => (
          <CuratedTrackPanel
            key={track.id}
            track={track}
          />
        ))}
      </div>
    </section>
  );
};

export default Curated;

'use client';

import type { CuratedTrack } from '@/lib/const';
import { CURATED_TRACKS } from '@/lib/const';
import { cn } from '@/lib/utils';
import { IconArrowUpRight, IconChevronRight } from '@tabler/icons-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

const CuratedFeature: FC<{ track: CuratedTrack; index: number }> = ({
  track,
  index,
}) => {
  const anchor = track.id === 'for-her' ? 'curated-for-her' : 'curated-for-him';
  const isReversed = index % 2 === 1;

  return (
    <article
      id={anchor}
      className='relative scroll-mt-28 py-12 md:py-20'
    >
      <div className={cn('grid md:grid-cols-12 gap-8 md:gap-10 items-center')}>
        {/* Hero media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: EASE }}
          className={cn(
            'md:col-span-7 relative aspect-4/5 md:aspect-5/6 rounded-[28px] md:rounded-[36px] overflow-hidden isolate bg-secondary',
            isReversed ? 'md:order-2' : 'md:order-1',
          )}
        >
          <Image
            src={track.heroImage}
            alt={track.heroAlt}
            fill
            sizes='(min-width: 768px) 58vw, 100vw'
            className='object-cover'
          />
          <div
            aria-hidden
            className='absolute inset-0 bg-linear-to-t from-ink/30 via-transparent to-transparent'
          />
          <div className='absolute bottom-1/3 left-1/2 -translate-x-1/2 translate-y-1/2 text-center text-ink font-display'>
            <h3 className='text-8xl'>The Curated</h3>
            <p className='text-4xl italic text-muted'>Style {track.badge}</p>
          </div>
        </motion.div>

        {/* Editorial column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className={cn(
            'md:col-span-5',
            isReversed ? 'md:order-1' : 'md:order-2',
          )}
        >
          <div className='text-[11px] tracking-micro uppercase text-muted-foreground mb-5'>
            {track.badge}
          </div>
          <h3 className='font-display text-5xl md:text-6xl lg:text-7xl leading-[0.92] tracking-display text-ink'>
            {track.title.split(' — ')[1] ?? track.title}
          </h3>
          <p className='mt-6 text-[15.5px] leading-[1.55] text-muted-foreground max-w-md'>
            {track.subtitle}
          </p>

          <div className='mt-8 flex items-center gap-3'>
            <Link
              href={track.ctaHref}
              className='h-11 px-5 rounded-full bg-ink text-ivory inline-flex items-center gap-2 text-[13.5px] font-medium hover:bg-ink/90 transition group'
            >
              Explore the edit
              <IconArrowUpRight
                size={14}
                stroke={1.8}
                className='transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
              />
            </Link>
            <Link
              href={track.ctaHref}
              className='text-[13.5px] text-muted-foreground hover:text-foreground transition inline-flex items-center gap-1'
            >
              Shop all
              <IconChevronRight
                size={13}
                stroke={1.8}
              />
            </Link>
          </div>

          {/* Sub-items chips grid */}
          <div className='mt-10 grid grid-cols-2 gap-3'>
            {track.items.slice(0, 4).map((item, i) => (
              <Link
                key={item.id}
                href={item.href}
                className='group flex items-center gap-3 p-2 pr-4 rounded-2xl border border-hairline hover:border-ink/30 hover:bg-muted/60 transition'
              >
                <div className='relative size-14 rounded-xl overflow-hidden bg-secondary shrink-0'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes='56px'
                    className='object-cover group-hover:scale-105 transition-transform duration-500'
                  />
                </div>
                <div className='flex-1 min-w-0'>
                  <div className='text-[13px] font-medium truncate'>
                    {item.name}
                  </div>
                  <div className='text-[11px] text-muted-foreground'>
                    {i % 2 === 0 ? '120+ styles' : '80+ styles'}
                  </div>
                </div>
                <IconArrowUpRight
                  size={14}
                  stroke={1.6}
                  className='opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all'
                />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </article>
  );
};

const Curated: FC = () => {
  return (
    <section className='relative bg-background'>
      <div className='max-w-360 mx-auto px-5 md:px-10'>
        <div className='text-center max-w-2xl mx-auto py-14 md:py-20'>
          <div className='text-[11px] tracking-micro uppercase text-muted-foreground mb-4'>
            The editorial
          </div>
          <h2 className='font-display text-5xl md:text-7xl leading-[0.92] tracking-display text-ink'>
            Curated, <span className='italic'>not catalogued.</span>
          </h2>
        </div>

        {CURATED_TRACKS.map((track, i) => (
          <CuratedFeature
            key={track.id}
            track={track}
            index={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Curated;

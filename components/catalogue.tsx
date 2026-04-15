'use client';

import { CATALOGUE_ITEMS } from '@/lib/const';
import { cn } from '@/lib/utils';
import { IconArrowRight, IconArrowUpRight } from '@tabler/icons-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { type FC, useRef } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

const Catalogue: FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <section className='relative py-16 md:py-28'>
      <div className='max-w-360 mx-auto px-5 md:px-10 mb-10 md:mb-14'>
        <div className='flex items-end justify-between gap-6'>
          <div className='max-w-xl'>
            <div className='text-[11px] tracking-micro uppercase text-muted-foreground mb-4'>
              The roster
            </div>
            <h2 className='font-display text-5xl md:text-7xl leading-[0.95] tracking-display text-ink'>
              The labels <br />
              <span className='italic text-muted-foreground'>we love.</span>
            </h2>
          </div>
          <div className='hidden md:flex items-center gap-3 pb-2'>
            <Link
              href='/brands'
              className='text-[13px] text-foreground hover:text-ink transition inline-flex items-center gap-1.5 group'
            >
              All 340 brands
              <IconArrowUpRight
                size={14}
                stroke={1.8}
                className='transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
              />
            </Link>
            <div className='flex gap-1.5 ml-4'>
              <button
                type='button'
                onClick={() => scrollBy(-1)}
                aria-label='Previous'
                className='size-10 rounded-full border border-hairline bg-background hover:bg-muted transition grid place-items-center'
              >
                <IconArrowRight
                  size={16}
                  stroke={1.6}
                  className='rotate-180'
                />
              </button>
              <button
                type='button'
                onClick={() => scrollBy(1)}
                aria-label='Next'
                className='size-10 rounded-full bg-ink text-ivory transition grid place-items-center hover:bg-ink/90'
              >
                <IconArrowRight size={16} stroke={1.8} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className='no-scrollbar overflow-x-auto snap-x snap-mandatory mask-fade-r'
      >
        <div className='flex gap-4 md:gap-5 px-5 md:px-10 pb-4'>
          {CATALOGUE_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.04 }}
              className='snap-start shrink-0 w-[78vw] sm:w-[52vw] md:w-[40vw] lg:w-[28vw] xl:w-[24rem]'
            >
              <Link href={item.link} className='block group'>
                <div
                  className={cn(
                    'relative aspect-4/5 rounded-3xl overflow-hidden transition-all duration-700',
                    item.color,
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes='(min-width: 1280px) 24rem, 40vw'
                    className='object-cover transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]'
                  />
                  <div className='absolute inset-0 bg-linear-to-t from-ink/40 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

                  <div className='absolute top-4 left-4 flex items-center gap-2 backdrop-blur-2xl rounded-2xl'>
                    <span className='h-7 px-2.5 rounded-full glass border border-white/40 text-[10.5px] tracking-micro uppercase inline-flex items-center text-ink'>
                      #{String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className='absolute top-4 right-4 size-9 rounded-full bg-background/80 backdrop-blur-md grid place-items-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500'>
                    <IconArrowUpRight size={14} stroke={1.8} />
                  </div>
                </div>
                <div className='mt-5 flex items-start justify-between gap-3'>
                  <div>
                    <h3 className='text-[15px] font-medium tracking-[-0.01em]'>
                      {item.name}
                    </h3>
                    <p className='text-[12.5px] text-muted-foreground mt-0.5'>
                      {i % 3 === 0
                        ? 'Travel · Luggage'
                        : i % 3 === 1
                        ? 'Everyday essentials'
                        : 'Festive · Occasion'}
                    </p>
                  </div>
                  <span className='text-[11px] tracking-micro uppercase text-muted-foreground shrink-0 pt-1'>
                    {12 + i * 3} pieces
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalogue;

'use client';

import { COLLECTIONS } from '@/lib/const';
import { cn } from '@/lib/utils';
import { IconArrowUpRight } from '@tabler/icons-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

const Collections: FC = () => {
  return (
    <section
      id='collections'
      className='relative bg-background py-16 md:py-28'
    >
      <div className='max-w-360 mx-auto px-5 md:px-10'>
        <div className='flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14'>
          <div className='max-w-2xl'>
            <div className='text-[11px] tracking-micro uppercase text-muted-foreground mb-4'>
              Collections
            </div>
            <h2 className='font-display text-5xl md:text-7xl leading-[0.92] tracking-display text-ink'>
              Live edits. <br />
              <span className='italic'>Updated daily.</span>
            </h2>
          </div>
          <p className='text-[14.5px] text-muted-foreground max-w-xs leading-relaxed'>
            Six rotating collections from travel trolleys to after hour
            fragrances. Fresh picks every morning.
          </p>
        </div>

        <div className='space-y-6 md:space-y-8'>
          {COLLECTIONS.slice(0, 4).map((collection, index) => {
            const isReversed = index % 2 === 1;
            const anchor = `collection-${collection.id}`;
            return (
              <motion.article
                id={anchor}
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: EASE }}
                className='relative overflow-hidden rounded-[28px] md:rounded-[36px] bg-card border border-hairline scroll-mt-28'
              >
                <div className='grid md:grid-cols-12 gap-0'>
                  {/* Hero image */}
                  <div
                    className={cn(
                      'relative md:col-span-6 lg:col-span-7 aspect-4/3 md:aspect-auto min-h-80',
                      isReversed && 'md:order-2',
                    )}
                  >
                    <Image
                      src={collection.heroImage}
                      alt={collection.heroAlt}
                      fill
                      sizes='(min-width: 768px) 58vw, 100vw'
                      className='object-cover'
                    />
                    <div
                      aria-hidden
                      className={cn(
                        'absolute inset-0 bg-linear-to-t',
                        collection.accentGradientClass,
                      )}
                    />
                    <div className='absolute top-5 left-5 flex items-center gap-2'>
                      <span className='h-7 px-3 rounded-full glass border border-white/30 text-[10.5px] tracking-micro uppercase inline-flex items-center text-ink'>
                        Edit {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Content column */}
                  <div
                    className={cn(
                      'md:col-span-6 lg:col-span-5 p-8 md:p-10 lg:p-14 flex flex-col justify-between min-h-85',
                      isReversed && 'md:order-1',
                    )}
                  >
                    <div>
                      <div className='text-[11px] tracking-micro uppercase text-muted-foreground mb-4'>
                        Collection · {collection.name}
                      </div>
                      <h3 className='font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-display text-ink'>
                        {collection.name}
                      </h3>
                      <p className='mt-5 text-[15px] leading-[1.55] text-muted-foreground max-w-sm'>
                        {collection.tagline}
                      </p>
                    </div>

                    <div className='mt-8'>
                      <div className='grid grid-cols-4 gap-2 mb-6'>
                        {collection.products.slice(0, 4).map((p) => (
                          <Link
                            key={p.id}
                            href={p.href}
                            className='group relative aspect-square rounded-2xl overflow-hidden bg-secondary'
                          >
                            <Image
                              src={p.image}
                              alt={p.name}
                              fill
                              sizes='80px'
                              className='object-cover group-hover:scale-110 transition-transform duration-700'
                            />
                            <div className='absolute inset-x-0 bottom-0 p-2 bg-linear-to-t from-ink/70 to-transparent opacity-0 group-hover:opacity-100 transition'>
                              <div className='text-[9.5px] text-ivory truncate tracking-micro uppercase'>
                                {p.name}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <Link
                        href={collection.products[0]?.href ?? '#'}
                        className='h-11 px-5 rounded-full bg-ink text-ivory inline-flex items-center gap-2 text-[13.5px] font-medium hover:bg-ink/90 transition group w-fit'
                      >
                        Shop the collection
                        <IconArrowUpRight
                          size={14}
                          stroke={1.8}
                          className='transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Collections;

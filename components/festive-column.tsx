'use client';

import { IconArrowUpRight } from '@tabler/icons-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

const FestiveColumn: FC = () => {
  return (
    <section className='relative bg-background py-8 md:py-16'>
      <div className='max-w-360 mx-auto px-5 md:px-10'>
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: EASE }}
          className='relative isolate overflow-hidden rounded-[32px] md:rounded-[40px] bg-[#1a0b08]'
        >
          <Image
            src='/festive.png'
            alt='Festive edit'
            width={2400}
            height={1000}
            priority={false}
            className='absolute inset-0 w-full h-full object-cover opacity-70'
          />

          <div
            aria-hidden
            className='absolute inset-0 bg-linear-to-r from-[#1a0b08]/95 via-[#1a0b08]/40 to-transparent'
          />
          <div
            aria-hidden
            className='absolute inset-0 bg-linear-to-t from-[#1a0b08]/80 via-transparent to-transparent'
          />

          <div className='relative z-10 grid md:grid-cols-12 gap-8 items-end p-8 md:p-14 lg:p-20 min-h-130 md:min-h-155'>
            <div className='md:col-span-7 text-white'>
              <div className='inline-flex items-center gap-2 h-7 px-3 rounded-full border border-ivory/20 text-[10.5px] tracking-micro uppercase mb-6'>
                <span className='size-1.5 rounded-full bg-saffron' />
                Special edition · Baishakhi × Vishu
              </div>
              <h2 className='font-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.92] tracking-display'>
                A festive <br />
                <span className='italic text-saffron'>homecoming.</span>
              </h2>
              <p className='mt-5 md:mt-8 text-[15px] md:text-[17px] leading-normal text-ivory/75 max-w-md'>
                Handwoven silks, cotton jamdani, gold-hued accessories. Fifty
                pieces across nine labels, curated for the season of lights.
              </p>
              <div className='mt-8 flex items-center gap-3 flex-wrap'>
                <Link
                  href='/products?banner_id=5555'
                  className='h-11 px-5 rounded-full bg-ivory text-ink inline-flex items-center gap-2 text-[13.5px] font-medium hover:bg-ivory/90 transition group'
                >
                  Shop the edit
                  <IconArrowUpRight
                    size={14}
                    stroke={1.8}
                    className='transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                  />
                </Link>
                <Link
                  href='#'
                  className='h-11 px-5 rounded-full border border-ivory/30 text-ivory inline-flex items-center gap-2 text-[13.5px] hover:bg-ivory/10 transition'
                >
                  Read the story
                </Link>
              </div>
            </div>

            <div className='md:col-span-5 flex md:justify-end'>
              <div className='grid grid-cols-3 gap-3 text-white w-full md:w-auto'>
                {[
                  { label: 'Labels', value: '09' },
                  { label: 'Pieces', value: '54' },
                  { label: 'Days left', value: '12' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      ease: EASE,
                      delay: 0.4 + i * 0.1,
                    }}
                    className='px-4 py-5 rounded-2xl border border-ivory/15 bg-ivory/5 backdrop-blur-sm'
                  >
                    <div className='font-display text-4xl md:text-5xl tabular-nums tracking-display'>
                      {stat.value}
                    </div>
                    <div className='text-[10.5px] tracking-micro uppercase opacity-70 mt-1'>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default FestiveColumn;

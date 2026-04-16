'use client';

import { cn } from '@/lib/utils';
import { IconArrowUpRight, IconGift } from '@tabler/icons-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

const GIFT_CATEGORIES = [
  {
    id: 4919,
    name: 'For him & her',
    subtitle: 'Matched sets',
    href: '/products?banner_id=4919',
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/af3a5b8fdfa2430db03ef5b98fa394e3_for_him_her_4x.webp',
    tint: 'bg-[#f5e4e4]',
  },
  {
    id: 4920,
    name: 'Family gifting',
    subtitle: 'From five to fifty',
    href: '/products?banner_id=4920',
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/0d37c15c8d9145b5bf3ce1750dfff402_family_gifting_4x.webp',
    tint: 'bg-[#e6eef2]',
  },
  {
    id: 4918,
    name: 'Housewarming',
    subtitle: 'New address, new memories',
    href: '/products?banner_id=4918',
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/4967606872aa4893bfc5fe295519787c_housewarming_4x.webp',
    tint: 'bg-[#efe7d9]',
  },
  {
    id: 4921,
    name: 'Birthday',
    subtitle: 'Last-minute saviours',
    href: '/products?banner_id=4921',
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/087f0f55ebbf4b5caeee922b1c264849_birthday_celebration_4x.webp',
    tint: 'bg-[#e9e1e9]',
  },
];

const Gifts: FC = () => {
  return (
    <section
      id='gifts'
      className='relative py-16 md:py-28 bg-background scroll-mt-24'
    >
      <div className='max-w-360 mx-auto px-5 md:px-10'>
        {/* Hero card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: EASE }}
          className='relative overflow-hidden rounded-[28px] md:rounded-[36px] bg-linear-to-br from-[#f7f1e6] to-[#ede3cf] p-8 md:p-14 mb-5'
        >
          <div
            aria-hidden
            className='absolute inset-0 opacity-30 dot-grid'
            style={{
              maskImage:
                'radial-gradient(60% 60% at 85% 50%, black 0%, transparent 100%)',
              WebkitMaskImage:
                'radial-gradient(60% 60% at 85% 50%, black 0%, transparent 100%)',
            }}
          />
          <div className='relative grid md:grid-cols-12 gap-8 md:gap-10 items-center'>
            <div className='md:col-span-7'>
              <div className='inline-flex items-center gap-2 h-8 px-3 rounded-full bg-background/60 border border-hairline text-[11px] tracking-micro uppercase mb-6'>
                <IconGift
                  size={13}
                  stroke={1.8}
                />
                Gifting
              </div>
              <h2 className='font-display text-5xl md:text-7xl lg:text-[7rem] leading-[0.92] tracking-display text-ink'>
                Last minute <br />
                <span className='italic text-saffron'>is our favourite.</span>
              </h2>
              <p className='mt-6 text-[15.5px] md:text-[17px] leading-normal text-muted-foreground max-w-md'>
                Gift wrapped in under twenty minutes. A handwritten note if you
                want one. At their door within the hour.
              </p>
              <div className='mt-8 flex items-center gap-3 flex-wrap'>
                <Link
                  href='/gifts'
                  className='h-12 px-6 rounded-full bg-ink text-ivory inline-flex items-center gap-2 text-[14px] font-medium hover:bg-ink/90 transition group'
                >
                  Explore gifting
                  <IconArrowUpRight
                    size={15}
                    stroke={1.8}
                    className='transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                  />
                </Link>
                <Link
                  href='/gift-cards'
                  className='h-12 px-6 rounded-full bg-background border border-hairline inline-flex items-center gap-2 text-[14px] hover:bg-muted transition'
                >
                  Gift cards
                </Link>
              </div>
            </div>

            <div className='md:col-span-5 relative'>
              <div className='relative aspect-4/5 rounded-3xl overflow-hidden shadow-float'>
                <Image
                  src='https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/087f0f55ebbf4b5caeee922b1c264849_birthday_celebration_4x.webp'
                  alt='Gifting hero'
                  fill
                  sizes='(min-width: 768px) 36vw, 100vw'
                  className='object-center transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]'
                />
              </div>
              {/* Floating tag */}
              <div className='absolute -top-3 -left-3 rotate-[-4deg] rounded-2xl bg-ink text-ivory px-4 py-2 shadow-float'>
                <div className='text-[9.5px] tracking-micro uppercase opacity-70'>
                  With love
                </div>
                <div className='text-[13px] font-medium text-white'>Wrapped · free</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category grid */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
          {GIFT_CATEGORIES.map((gift, i) => (
            <motion.div
              key={gift.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
            >
              <Link
                href={gift.href}
                className={cn(
                  'group relative block overflow-hidden rounded-3xl aspect-4/5 transition',
                  gift.tint,
                )}
              >
                <Image
                  src={gift.image}
                  alt={gift.name}
                  fill
                  sizes='(min-width: 1024px) 22vw, 45vw'
                  className='object-center transition-transform duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]'
                />
                <div className='absolute inset-0 bg-linear-to-t from-ink/60 via-ink/10 to-transparent' />
                <div className='absolute top-4 right-4 size-9 rounded-full bg-background/80 backdrop-blur-md grid place-items-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500'>
                  <IconArrowUpRight
                    size={14}
                    stroke={1.8}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gifts;

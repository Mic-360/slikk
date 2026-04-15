'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { IconArrowRight, IconClock } from '@tabler/icons-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { useState } from 'react';
import ColumnLayout from './columns';
import { FlickeringGrid } from './ui/flickering-grid';

const BRAND_DROPS = [
  {
    id: 1,
    name: 'Fable Street',
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/19d64af0f5ad4a6aa89c726440873561_fablestreet_for_you_p.webp',
    link: '/products?banner_id=5938&namex=Fable Street',
  },
  {
    id: 2,
    name: 'Feier',
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/2e0d8a98be7a45458cac250f4d4dd931_feier_2x.webp',
    link: '/products?banner_id=5941&namex=Feier',
  },
  {
    id: 3,
    name: 'Wall Art & Decor',
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/1058b3bdba6442a7a91df475b9ea45f2_wall_art_and_decor_2x.webp',
    link: '/products?banner_id=5939&namex=Wall Art & Decor',
  },
];

const PRICE_POINTS = [
  {
    id: 1,
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/c90e00095e0e468e93406aaddf1f4523_kurtis1_2x.webp',
    link: '/products?banner_id=5754&namex=Fashion',
  },
  {
    id: 2,
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/a52004e4736f43c1938ab121637e0286_kurtis_2x.webp',
    link: '/products?banner_id=5752&namex=Jewellery',
  },
  {
    id: 3,
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/9f0111680bf949a298b6cca1e98ee5cf_kurtis5_2x.webp',
    link: '/products?banner_id=5751&namex=Beauty',
  },
];

const Digit: FC<{ value: string }> = ({ value }) => (
  <div className='flex flex-col items-center'>
    <div className='font-black flex items-center justify-center text-4xl md:text-5xl w-12 md:w-14 h-16 md:h-20 bg-linear-to-b from-[#f4a335] from-50% to-[#7a521b] to-50% text-white rounded-md shadow-lg'>
      {value}
    </div>
  </div>
);

const Countdown: FC = () => {
  const [timeLeft, setTimeLeft] = useState({ h: '01', m: '14', s: '36' });

  return (
    <div className='flex items-center gap-1 md:gap-2'>
      <div className='flex flex-col items-center gap-2'>
        <div className='flex gap-1'>
          <Digit value={timeLeft.h[0]} />
          <Digit value={timeLeft.h[1]} />
        </div>
        <span className='text-[10px] font-black text-[#f4a335] tracking-widest'>
          HOURS
        </span>
      </div>
      <span className='text-4xl md:text-5xl font-black text-[#f4a335] self-start mt-2'>
        :
      </span>
      <div className='flex flex-col items-center gap-2'>
        <div className='flex gap-1'>
          <Digit value={timeLeft.m[0]} />
          <Digit value={timeLeft.m[1]} />
        </div>
        <span className='text-[10px] font-black text-[#f4a335] tracking-widest'>
          MINUTES
        </span>
      </div>
      <span className='text-4xl md:text-5xl font-black text-[#f4a335] self-start mt-2'>
        :
      </span>
      <div className='flex flex-col items-center gap-2'>
        <div className='flex gap-1'>
          <Digit value={timeLeft.s[0]} />
          <Digit value={timeLeft.s[1]} />
        </div>
        <span className='text-[10px] font-black text-[#f4a335] tracking-widest'>
          SECONDS
        </span>
      </div>
    </div>
  );
};

const AdsColumn: FC = () => {
  return (
    <ColumnLayout
      title='Brand Drops'
      subtitle='New arrivals from favorites'
      className='px-4 md:px-6'
    >
      <div className='relative w-full rounded-3xl overflow-hidden'>
        <div className='relative flex flex-col md:flex-row min-h-100'>
          <FlickeringGrid
            className='absolute inset-0 z-0 size-full'
            squareSize={4}
            gridGap={6}
            color='#6B7280'
            maxOpacity={0.5}
            flickerChance={0.1}
          />
          <div className='flex-1 flex items-center justify-center z-10 pl-2'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className='flex flex-col gap-2 w-full'
            >
              <h2 className='text-4xl md:text-6xl font-black italic text-destructive/80 leading-tight'>
                LAUNCH OFFER
              </h2>

              <Badge className='w-fit text-xl p-6 bg-destructive'>
                LIVE ONLY FOR TODAY
              </Badge>
            </motion.div>
          </div>

          <div className='flex-1 grid grid-cols-3 gap-3 md:gap-4 p-4 md:p-8 items-center'>
            {BRAND_DROPS.map((item, index) => (
              <Link
                key={item.id}
                href={item.link}
                className='group/item block h-full'
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className='relative aspect-9/16 rounded-2xl overflow-hidden border border-white/10 transition-all shadow-2xl group-hover/item:shadow-2xl'
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className='object-center'
                  />
                  <div className='absolute inset-0 bg-black/0 group-hover/item:bg-black/30 transition-colors' />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </ColumnLayout>
  );
};

export default AdsColumn;

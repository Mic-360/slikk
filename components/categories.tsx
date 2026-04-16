'use client';

import { cn } from '@/lib/utils';
import { IconArrowUpRight } from '@tabler/icons-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

type Tile = {
  name: string;
  href: string;
  image: string;
  kicker: string;
  count: string;
  tint: string;
  area: string; // tailwind grid classes
  textColor?: string;
};

const TILES: Tile[] = [
  {
    name: 'Dresses',
    href: '/products?banner_id=2480&namex=Dresses',
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/d2f6ccec6baf40f28cb38c796c3f75b8_dresses_5x.webp',
    kicker: 'Edit 01',
    count: '480 styles',
    tint: 'bg-[#f5e9da]',
    area: 'md:col-span-6 md:row-span-2 aspect-[4/5] md:aspect-auto',
  },
  {
    name: 'Men’s Topwear',
    href: '/products?banner_id=2478&namex=Mens%20Topwear',
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/e69fc4d6e9b74fc9a97bf9c6bdaa383a_mens_top_wear_5x.webp',
    kicker: 'Edit 02',
    count: '312 styles',
    tint: 'bg-[#eceae4]',
    area: 'md:col-span-3 aspect-square',
  },
  {
    name: 'Ethnic',
    href: '/products?banner_id=2480&namex=Ethnic',
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/f2767566a574413c888f00ee19b0fdaa_women_ethnic_wear_5x.webp',
    kicker: 'Edit 03',
    count: '210 styles',
    tint: 'bg-[#efe3d4]',
    area: 'md:col-span-3 aspect-square',
  },
  {
    name: 'Footwear',
    href: '/products?category=footwear',
    image: '/slikk/header/footwear.png',
    kicker: 'Edit 04',
    count: '156 styles',
    tint: 'bg-ink text-ivory',
    textColor: 'text-ivory',
    area: 'md:col-span-3 aspect-square',
  },
  {
    name: 'Jewellery',
    href: '/products?category=jewellery',
    image: '/slikk/header/jewellery.webp',
    kicker: 'Edit 05',
    count: '94 pieces',
    tint: 'bg-[#e6e0d4]',
    area: 'md:col-span-3 aspect-square',
  },
  {
    name: 'Beauty',
    href: '/products?category=beauty',
    image: '/slikk/header/beauty.png',
    kicker: 'Edit 06',
    count: '228 products',
    tint: 'bg-[#f2ecd9]',
    area: 'md:col-span-6 aspect-[16/9]',
  },
];

const TileCard: FC<{ tile: Tile; index: number }> = ({ tile, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, ease: EASE, delay: index * 0.05 }}
    className={cn(
      'group relative overflow-hidden rounded-[28px] md:rounded-[32px] isolate',
      tile.tint,
      tile.area,
    )}
  >
    <Link
      href={tile.href}
      className='absolute inset-0 z-30'
      aria-label={tile.name}
    />
    <div className='absolute inset-0'>
      <Image
        src={tile.image}
        alt={tile.name}
        fill
        sizes='(min-width: 1024px) 40vw, 100vw'
        className='object-center transition-transform duration-1200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]'
      />
    </div>

    <div
      aria-hidden
      className='absolute inset-0 bg-linear-to-t from-black/50 via-black/0 to-transparent'
    />

    <div
      className={cn(
        'relative z-20 h-full flex flex-col justify-between p-6 md:p-8',
        tile.textColor ?? 'text-ivory',
      )}
    >
      <div className='flex items-start justify-between'>
        <span className='text-[10.5px] tracking-micro uppercase opacity-80 backdrop-blur-2xl text-black p-2.5 rounded-full'>
          {tile.kicker}
        </span>
        <div className='size-10 rounded-full glass border border-white/30 grid place-items-center translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500'>
          <IconArrowUpRight
            size={16}
            stroke={1.8}
            className='text-ink'
          />
        </div>
      </div>

      <div>
        <h3 className='font-display text-4xl md:text-5xl lg:text-6xl leading-[0.92] tracking-display'>
          {tile.name}
        </h3>
        <div className='mt-3 flex items-center gap-2 text-[12px] opacity-90'>
          <span>{tile.count}</span>
          <span className='opacity-60'>·</span>
          <span>from ₹599</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const Categories: FC = () => {
  return (
    <section
      id='categories'
      className='relative py-16 md:py-28 bg-background scroll-mt-24'
    >
      <div className='max-w-360 mx-auto px-5 md:px-10'>
        <div className='flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14'>
          <div className='max-w-2xl'>
            <div className='text-[11px] tracking-micro uppercase text-muted-foreground mb-4'>
              Shop by category
            </div>
            <h2 className='font-display text-5xl md:text-7xl leading-[0.92] tracking-display text-ink'>
              Six rooms. <br />
              <span className='italic'>Infinite looks.</span>
            </h2>
          </div>
          <p className='max-w-sm text-[15px] leading-normal text-muted-foreground'>
            Everything organised the way you’d shop a flagship store, but it
            arrives before your coffee gets cold.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-12 md:auto-rows-[240px] lg:auto-rows-[280px] gap-4'>
          {TILES.map((tile, i) => (
            <TileCard
              key={tile.name}
              tile={tile}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

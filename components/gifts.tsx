'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

type GiftCategory = {
  id: number;
  name: string;
  href: string;
  image: string;
  glowClass: string;
};

const GIFT_HERO_IMAGE =
  'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/e70fb86f2d7644ebb1a06aa6abf1fea1_gift_edit_web.webp';

const GIFT_CATEGORIES: GiftCategory[] = [
  {
    id: 4919,
    name: 'For him & her',
    href: '/products?banner_id=4919&namex=For%20him%20%26%20her',
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/af3a5b8fdfa2430db03ef5b98fa394e3_for_him_her_4x.webp',
    glowClass: 'from-fuchsia-400/45 to-rose-300/10',
  },
  {
    id: 4920,
    name: 'Family gifting',
    href: '/products?banner_id=4920&namex=Family%20Gifting',
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/0d37c15c8d9145b5bf3ce1750dfff402_family_gifting_4x.webp',
    glowClass: 'from-cyan-400/45 to-sky-300/10',
  },
  {
    id: 4918,
    name: 'Housewarming',
    href: '/products?banner_id=4918&namex=Housewarming',
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/4967606872aa4893bfc5fe295519787c_housewarming_4x.webp',
    glowClass: 'from-amber-300/45 to-orange-200/10',
  },
  {
    id: 4921,
    name: 'Birthday celebration',
    href: '/products?banner_id=4921&namex=Birthday%20Celebration',
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/087f0f55ebbf4b5caeee922b1c264849_birthday_celebration_4x.webp',
    glowClass: 'from-violet-400/45 to-indigo-300/10',
  },
];

const Gifts: FC = () => {
  return (
    <section
      id='gifts'
      className='relative isolate overflow-hidden'
    >
      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className='relative min-h-80 overflow-hidden px-4 md:px-6'
      >
        <div className='w-full flex flex-col items-center text-center'>
          <h3 className='text-2xl font-black uppercase tracking-[0.08em] text-black drop-shadow-[0_8px_22px_rgba(0,0,0,0.45)] md:text-4xl'>
            Gift Edit
          </h3>
          <p className='mt-2 max-w-md text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground md:text-xs'>
            Discover the perfect gift for any occasion
          </p>
        </div>
        <div className='relative z-20 flex h-full flex-col justify-between no-scrollbar w-full overflow-x-auto overflow-y-hidden py-2'>
          <div className='flex w-max min-w-full items-end justify-center gap-3 pr-1 pb-1 md:gap-4 md:h-72 '>
            {GIFT_CATEGORIES.map((gift, index) => (
              <motion.div
                key={gift.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  delay: 0.12 + index * 0.06,
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8, rotate: 0, scale: 1.01 }}
                style={{ rotate: ((index % 3) - 1) * 1.8 }}
                className='w-36 shrink-0 md:w-48 lg:w-52'
              >
                <Link
                  href={gift.href}
                  className='group/gift relative block overflow-hidden rounded-2xl border border-white/30 bg-black/30 backdrop-blur-md'
                >
                  <div
                    className={`pointer-events-none absolute inset-x-3 -top-16 h-24 rounded-full bg-linear-to-b ${gift.glowClass} blur-2xl`}
                  />

                  <div className='relative aspect-4/5'>
                    <Image
                      src={gift.image}
                      alt={gift.name}
                      fill
                      className='object-center transition-transform duration-500 ease-out group-hover/gift:scale-107'
                      sizes='(max-width: 768px) 144px, (max-width: 1200px) 192px, 208px'
                    />
                    <div className='absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent' />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.article>
    </section>
  );
};

export default Gifts;

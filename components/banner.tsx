'use client';

import { IconArrowUpRight, IconBolt, IconMapPin } from '@tabler/icons-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { type FC, useEffect, useRef, useState } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

const HERO_IMAGES = [
  {
    src: 'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/d2f6ccec6baf40f28cb38c796c3f75b8_dresses_5x.webp',
    alt: 'Signature piece',
    rotate: -4,
    scale: 1,
    inset: 'top-[8%] left-[4%] w-[28%] aspect-[3/4]',
  },
  {
    src: 'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/e69fc4d6e9b74fc9a97bf9c6bdaa383a_mens_top_wear_5x.webp',
    alt: 'Signature piece',
    rotate: 3,
    scale: 1.05,
    inset: 'top-[14%] right-[5%] w-[30%] aspect-[3/4]',
  },
  {
    src: 'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/1de040b4d8e846028ee783c0c57af51d_Mokabora%20(1).png',
    alt: 'Accessory',
    rotate: -6,
    scale: 0.88,
    inset: 'bottom-[8%] left-[14%] w-[22%] aspect-square',
  },
  {
    src: 'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/2ad35585ff224786a235eab54290d2ef_soch-1.png',
    alt: 'Accessory',
    rotate: 5,
    scale: 0.92,
    inset: 'bottom-[12%] right-[16%] w-[20%] aspect-square',
  },
];

const Countdown: FC = () => {
  const [mm, setMm] = useState('59');
  const [ss, setSs] = useState('42');

  useEffect(() => {
    const deadline = Date.now() + 1000 * 60 * 59 + 1000 * 42;
    const id = setInterval(() => {
      const diff = Math.max(0, deadline - Date.now());
      const m = Math.floor(diff / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setMm(String(m).padStart(2, '0'));
      setSs(String(s).padStart(2, '0'));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className='font-mono tabular-nums text-[11px] tracking-[0.08em] flex items-center gap-1'>
      <span>{mm}</span>
      <span className='opacity-60'>:</span>
      <span>{ss}</span>
    </div>
  );
};

const Banner: FC = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className='relative isolate overflow-hidden bg-background pb-16 md:pb-24'
    >
      {/* Radial wash */}
      <div
        aria-hidden
        className='absolute inset-x-0 top-0 h-[120%] opacity-70 pointer-events-none'
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, rgba(232,168,75,0.18) 0%, rgba(232,168,75,0.02) 45%, transparent 75%)',
        }}
      />

      {/* Dot grid */}
      <div
        aria-hidden
        className='absolute inset-0 opacity-[0.45] pointer-events-none dot-grid'
        style={{
          maskImage: 'radial-gradient(60% 50% at 50% 50%, black 0%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(60% 50% at 50% 50%, black 0%, transparent 75%)',
        }}
      />

      <div className='relative max-w-360 mx-auto px-5 md:px-10 pt-10 md:pt-16'>
        {/* Metadata strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className='flex flex-wrap items-center justify-between gap-3 mb-10 md:mb-14'
        >
          <div className='flex items-center gap-2 text-[11px] tracking-micro uppercase text-muted-foreground'>
            Volume 24 · Autumn/Winter 26
          </div>
          <div className='flex items-center gap-2 text-[11px] tracking-micro uppercase text-muted-foreground'>
            <IconMapPin size={12} stroke={1.6} />
            Bengaluru, India · 58 min ETA
          </div>
        </motion.div>

        {/* Hero composition */}
        <div className='relative'>
          {/* Floating product plates (desktop only) */}
          <motion.div
            style={{ y, opacity }}
            aria-hidden
            className='hidden lg:block absolute inset-0 pointer-events-none'
          >
            {HERO_IMAGES.map((img, i) => (
              <motion.div
                // biome-ignore lint/suspicious/noArrayIndexKey: static
                key={i}
                initial={{ opacity: 0, y: 60, rotate: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: img.rotate,
                  scale: img.scale,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.25 + i * 0.1,
                  ease: EASE,
                }}
                className={`absolute ${img.inset} rounded-3xl overflow-hidden shadow-float`}
              >
                <div className='absolute inset-0 bg-secondary' />
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className='object-cover'
                  sizes='30vw'
                  priority={i < 2}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Main typography column */}
          <div className='relative z-10 text-center max-w-230 mx-auto py-8 md:py-24'>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
              className='inline-flex items-center gap-2 h-8 pl-2 pr-3.5 rounded-full border border-hairline bg-background/60 backdrop-blur-md text-[11.5px] text-foreground/80 mb-6'
            >
              <span className='size-5 rounded-full bg-saffron grid place-items-center'>
                <IconBolt size={11} stroke={2.5} className='text-ink' />
              </span>
              India’s fastest fashion delivery
            </motion.div>

            <h1 className='font-display text-[16vw] md:text-[12rem] lg:text-[14rem] leading-[0.88] tracking-display text-ink'>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
                className='block'
              >
                Sixty
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.28 }}
                className='block italic text-saffron'
              >
                minutes.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.45 }}
              className='mt-8 md:mt-10 text-[17px] md:text-[19px] leading-[1.4] text-black max-w-md mx-auto'
            >
              Curated labels, premium pieces, at your door within the hour. No
              waiting a week. No tracking a parcel across states. Just style now.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.58 }}
              className='mt-10 flex items-center justify-center gap-3 flex-wrap'
            >
              <Link
                href='#categories'
                className='group h-12 px-6 rounded-full bg-ink text-ivory inline-flex items-center gap-2 text-[14px] font-medium hover:opacity-90 transition'
              >
                Start shopping
                <IconArrowUpRight
                  size={16}
                  stroke={1.8}
                  className='transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                />
              </Link>
              <Link
                href='#collections'
                className='h-12 px-6 rounded-full bg-background border border-hairline inline-flex items-center gap-2 text-[14px] text-foreground hover:bg-muted transition'
              >
                See the edit
              </Link>
            </motion.div>
          </div>

          {/* Live order ticker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.8 }}
            className='relative z-10 mt-10 md:mt-16 mx-auto max-w-xl rounded-2xl border border-hairline bg-card/80 backdrop-blur-md p-3 md:p-4 shadow-elevated'
          >
            <div className='flex items-center gap-3'>
              <div className='relative size-10 rounded-xl overflow-hidden bg-muted shrink-0'>
                <Image
                  src='https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/1de040b4d8e846028ee783c0c57af51d_Mokabora%20(1).png'
                  alt='live order'
                  fill
                  className='object-cover'
                  sizes='40px'
                />
              </div>
              <div className='flex-1 min-w-0'>
                <p className='text-[12px] text-muted-foreground'>
                  <span className='text-foreground font-medium'>Riya</span> in
                  Bengaluru just ordered · Mokobara Carry-on
                </p>
                <div className='flex items-center gap-2 mt-0.5'>
                  <div className='flex-1 h-1 rounded-full bg-muted overflow-hidden'>
                    <motion.div
                      initial={{ width: '8%' }}
                      animate={{ width: '42%' }}
                      transition={{ duration: 2, ease: EASE, delay: 1 }}
                      className='h-full bg-saffron'
                    />
                  </div>
                  <span className='text-[11px] text-muted-foreground'>
                    Packing
                  </span>
                </div>
              </div>
              <div className='flex flex-col items-end shrink-0 pl-2'>
                <span className='text-[10px] tracking-micro uppercase text-muted-foreground'>
                  ETA
                </span>
                <Countdown />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

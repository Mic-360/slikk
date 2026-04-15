'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import type { FC } from 'react';
import { HexagonPattern } from './ui/hexagonpattern';

const Banner: FC = () => {
  return (
    <section className='relative w-full px-4 py-8 md:px-6 md:py-18 overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className='relative mx-auto md:h-70 rounded-4xl group bg-black shadow-xl'
      >
        <div className='absolute inset-0 rounded-4xl overflow-hidden pointer-events-none'>
          <HexagonPattern
            gap={20}
            radius={40}
            x={-1}
            y={-1}
          />
        </div>
        <div className='relative z-30 h-full flex flex-col md:flex-row items-center md:justify-between px-8 md:px-20 py-10 md:py-0'>
          <div className='flex flex-col gap-5 md:gap-7 max-w-2xl text-center md:text-left'>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h2 className='text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.85] flex flex-col uppercase'>
                <p className='flex flex-col md:flex-row items-center gap-2 md:gap-4'>
                  <span>
                    GET ₹250 OFF
                    <span className='text-primary italic animate-bounce-slow'>
                      *
                    </span>
                  </span>
                </p>
                <span className='text-lg md:text-3xl font-medium opacity-60 tracking-tight mt-4 normal-case italic max-w-xs md:max-w-none mx-auto md:mx-0'>
                  on your first 2 orders
                </span>
              </h2>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10, y: 50 }}
            animate={{ opacity: 1, scale: 1.1, rotate: -5, x: 0, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: 'spring',
              stiffness: 100,
              damping: 20,
            }}
            className='relative mt-8 md:mt-3 md:-translate-y-10 group-hover:rotate-0 transition-transform duration-700'
          >
            <div className='relative size-64 md:size-80'>
              <Image
                src='/bag.png'
                alt='Slikk Black Shopping Bag'
                fill
                className='object-contain'
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;

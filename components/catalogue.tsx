'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, type FC } from 'react';
import { CATALOGUE_ITEMS } from '@/lib/const';

const Catalogue: FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className='w-full py-8 bg-background'>
      <div className='mx-auto px-4 md:px-6'>
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className='w-full'
        >
          <div className='flex items-end justify-between mb-8 md:mb-12'>
            <div className='flex flex-col gap-2'>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='text-xs font-black tracking-[0.3em] uppercase text-primary'
              >
                Curated Collections
              </motion.h3>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className='text-3xl md:text-5xl font-black tracking-tighter'
              >
                The Catalogue
              </motion.h2>
            </div>

            <div className='hidden md:flex gap-3'>
              <CarouselPrevious className='static translate-y-0 size-12 rounded-2xl bg-black text-white hover:bg-black/90 hover:text-white border-0 transition-all hover:scale-105 active:scale-95' />
              <CarouselNext className='static translate-y-0 size-12 rounded-2xl bg-black text-white hover:bg-black/90 hover:text-white border-0 transition-all hover:scale-105 active:scale-95' />
            </div>
          </div>

          <CarouselContent className='-ml-4'>
            {CATALOGUE_ITEMS.map((item, index) => (
              <CarouselItem
                key={item.id}
                className='pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4'
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={item.link}
                    className='group block relative overflow-visible'
                  >
                    <div
                      className={cn(
                        'relative aspect-4/5 rounded-[32px] overflow-hidden transition-all duration-700 ease-[0.22,1,0.36,1]',
                        'group-hover:rounded-[48px] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)]',
                        item.color,
                      )}
                    >
                      <div className='absolute top-4 left-8 z-20 flex flex-col gap-1'>
                        <span className='text-[10px] font-black uppercase tracking-widest text-white/60'>
                          Featured Brand
                        </span>
                        <span className='text-2xl font-black tracking-tighter text-white leading-none uppercase'>
                          {item.name}
                        </span>
                      </div>

                      <div className='absolute inset-0 h-full w-full'>
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className='object-cover transition-transform duration-1000 ease-[0.22,1,0.36,1] group-hover:scale-110'
                          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'
                        />
                        <div className='absolute inset-0 bg-linear-to-b from-black/80 via-black/20 to-transparent' />
                      </div>

                      <div className='absolute top-8 right-8 z-20 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500'>
                        <div className='size-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl'>
                          <svg
                            width='20'
                            height='20'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='3'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <path d='M5 12h14m-7-7 7 7-7 7' />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className='flex justify-center md:justify-start gap-2 mt-10 px-2'>
          {CATALOGUE_ITEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                'h-1.5 rounded-full transition-all duration-500',
                current === i
                  ? 'w-10 bg-primary'
                  : 'w-2 bg-black/10 hover:bg-black/20',
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalogue;

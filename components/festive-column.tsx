'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import ColumnLayout from './columns';
import { FESTIVE_ITEMS } from '@/lib/const';

const FestiveColumn: FC = () => {
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
    <ColumnLayout
      title='Festive Edit'
      subtitle='Crafted for celebrations'
      badge='Special Edition'
    >
      <div className='relative w-full aspect-21/9 rounded-3xl overflow-hidden group/main bg-black'>
        <Image
          src='https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/71837a14aca64628b669d65b52811324_baishakhi_x_vishu_web_for_you_2x.webp'
          alt='Festive Campaign'
          fill
          className='object-center'
          priority
        />

        <div className='absolute inset-0 bg-linear-to-t from-[#1a0b08] via-[#1a0b08]/40 to-transparent z-10' />

        <div className='absolute inset-y-0 right-0 w-[65%] z-20 flex flex-col justify-end p-6'>
          <Carousel
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 2500,
                stopOnInteraction: false,
              }),
            ]}
            opts={{
              align: 'start',
              loop: true,
            }}
            className='w-full'
          >
            <CarouselContent className='-ml-4'>
              {FESTIVE_ITEMS.map((item) => (
                <CarouselItem
                  key={item.id}
                  className='pl-4 basis-1/3'
                >
                  <Link
                    href={item.link}
                    className='group block relative h-full'
                  >
                    <motion.div className='relative aspect-3/4 rounded-2xl overflow-hidden'>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes='(max-width: 768px) 144px, (max-width: 1200px) 192px, 208px'
                        className='object-center'
                      />
                    </motion.div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className='flex gap-1 mt-4 px-1'>
            {FESTIVE_ITEMS.map((_, i) => (
              <div
                key={i}
                className={cn(
                  'h-0.5 rounded-full transition-all duration-500',
                  current === i ? 'w-8 bg-white' : 'w-2 bg-white/20',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </ColumnLayout>
  );
};

export default FestiveColumn;

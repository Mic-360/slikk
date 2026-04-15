'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import ColumnLayout from './columns';

const CATEGORIES = [
  {
    id: 1,
    name: 'Dresses',
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/d2f6ccec6baf40f28cb38c796c3f75b8_dresses_5x.webp',
    link: '/products?banner_id=2480&namex=Dresses',
  },
  {
    id: 2,
    name: "Men's Topwear",
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/e69fc4d6e9b74fc9a97bf9c6bdaa383a_mens_top_wear_5x.webp',
    link: '/products?banner_id=2478&namex=Mens Topwear',
  },
  {
    id: 3,
    name: "Women's Ethnic Wear",
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/f2767566a574413c888f00ee19b0fdaa_women_ethnic_wear_5x.webp',
    link: '/products?banner_id=2480&namex=Ethnic',
  },
  {
    id: 4,
    name: "Men's Ethnic Wear",
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/f6a4ea55d6554928bc50aa9373bc5136_men_ethnic_wear_5x.webp',
    link: '/products?banner_id=2480&namex=Ethnic',
  },
  {
    id: 5,
    name: 'Bottom Wear',
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/44a47ff83c774dc9923146d25deda8c3_bottom_wear_5x.webp',
    link: '/products?banner_id=2470&namex=Bottom Wear',
  },
  {
    id: 6,
    name: "Women's Topwear",
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/784488b871e34e8499bd14d2d9cf589d_women top wear.webp',
    link: '/products?banner_id=5098&namex=Womens Topwear',
  },
  {
    id: 7,
    name: 'Handbags',
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/a1aa0005b45c412ab8154779d869c3e5_handbags_5x.webp',
    link: '/products?banner_id=2475&namex=Handbags',
  },
  {
    id: 8,
    name: 'Beauty',
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/e1fe7108282f408995967ff8ec31c631_beauty_5x.webp',
    link: '/home?sub_page=Beauty',
  },
  {
    id: 9,
    name: 'Footwear',
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/c5653b65830544e9ac8cc932b89d806f_footwear_5x.webp',
    link: '/home?sub_page=Footwear',
  },
  {
    id: 10,
    name: 'Jewellery',
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/e567f0e71d6148108435cc1d2c5f4005_Jewellerys.png',
    link: '/home?sub_page=Jewellery',
  },
  {
    id: 11,
    name: 'Trolleys & Backpacks',
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/fd4267cb88a7427e850f55069cec05f4_travel_5x.webp',
    link: '/products?banner_id=2477&namex=Trolleys Backpacks',
  },
  {
    id: 12,
    name: 'Home Decor',
    image:
      'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/8774d51883ae44c18abe0ac5f4b3fc8a_Home Decor.png',
    link: '/home?sub_page=Home',
  },
];

const CategoryCard: FC<{
  id: number;
  name: string;
  image: string;
  link: string;
}> = ({ name, image, link, id }) => {
  return (
    <Link href={link}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: (id % 6) * 0.05 }}
        whileHover={{ y: -12, scale: 1.03 }}
        className='group relative rounded-2xl overflow-hidden cursor-pointer'
      >
        {/* Image container */}
        <div className='relative h-72 md:h-96 overflow-hidden'>
          <Image
            src={image}
            alt={name}
            fill
            className='object-center group-hover:scale-110 transition-transform duration-500'
          />
        </div>

        {/* Shine effect on hover */}
        <div className='absolute inset-0 overflow-hidden z-15'>
          <motion.div
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.5 }}
            className='absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent'
          />
        </div>
      </motion.div>
    </Link>
  );
};

const Categories: FC = () => {
  return (
    <section
      id='section-categories'
      className='scroll-mt-24'
    >
      <ColumnLayout
        title='Shop by Category'
        subtitle='Find exactly what you love'
        className='px-4 md:px-6'
      >
        <div className='w-full'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className='hidden md:grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4'
          >
            {CATEGORIES.map((category) => (
              <CategoryCard
                key={category.id}
                {...category}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className='md:hidden relative'
          >
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2600,
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
              <CarouselContent className='-ml-3'>
                {CATEGORIES.map((category) => (
                  <CarouselItem
                    key={category.id}
                    className='pl-3 basis-1/2'
                  >
                    <CategoryCard {...category} />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className='left-2 top-1/2 -translate-y-1/2 size-8 rounded-full border-border bg-background/90 text-foreground shadow-md' />
              <CarouselNext className='right-2 top-1/2 -translate-y-1/2 size-8 rounded-full border-border bg-background/90 text-foreground shadow-md' />
            </Carousel>
          </motion.div>
        </div>
      </ColumnLayout>
    </section>
  );
};

export default Categories;

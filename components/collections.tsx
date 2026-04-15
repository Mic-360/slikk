'use client';

import { COLLECTIONS } from '@/lib/const';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, type FC } from 'react';

const Collections: FC = () => {
  const [activeCollection, setActiveCollection] = useState(0);
  const panelsRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;
        const index = Number(visible.target.getAttribute('data-index'));
        if (Number.isNaN(index)) return;
        setActiveCollection(index);
      },
      {
        threshold: [0.3, 0.45, 0.6, 0.8],
        rootMargin: '-8% 0px -12% 0px',
      },
    );

    panelsRef.current.forEach((panel, index) => {
      if (!panel) return;
      panel.setAttribute('data-index', `${index}`);
      observer.observe(panel);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id='collections'
      className='relative isolate overflow-hidden py-6 md:py-12'
    >
      <div className='flex items-end justify-between gap-4 px-4 md:px-6 pb-6'>
        <div className='flex flex-col'>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-3xl md:text-5xl font-black tracking-tighter uppercase'
          >
            Collections
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-[11px] md:text-xs text-muted-foreground font-black uppercase tracking-wider opacity-60'
          >
            Explore our curated selection of exclusive collections, featuring
          </motion.p>
        </div>
      </div>
      <div className='relative flex flex-col bg-neutral-900'>
        {COLLECTIONS.map((collection, collectionIndex) => (
          <article
            key={collection.id}
            id={`collection-${collection.id}`}
            ref={(element) => {
              panelsRef.current[collectionIndex] = element;
            }}
            className='relative min-h-96 sm:min-h-162.5 overflow-hidden border-b border-white/10 scroll-mt-24'
          >
            <div className='absolute inset-0'>
              <Image
                src={collection.heroImage}
                alt={collection.heroAlt}
                fill
                className='object-center'
                sizes='100vw'
                priority={collectionIndex === 0}
              />
              <div className='absolute inset-0 bg-linear-to-b from-black/10 via-black/20 to-black/50' />
              <div
                className={cn(
                  'absolute inset-x-0 -top-24 bg-linear-to-b blur-2xl',
                  collection.accentGradientClass,
                )}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.45 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className='absolute inset-x-0 bottom-0 flex flex-col justify-end px-4 md:px-8 md:py-6 lg:px-12'
            >
              <div className='w-full max-w-full overflow-x-auto overflow-y-hidden no-scrollbar'>
                <div
                  className={cn(
                    'flex w-max min-w-full items-end gap-3 pb-4 pr-2 md:gap-4 md:pb-5 md:h-80 xl:h-96',
                    collectionIndex % 2 === 0 ? 'justify-end' : 'justify-start',
                  )}
                >
                  {collection.products.map((product, productIndex) => {
                    const baseTilt = ((productIndex % 3) - 1) * 2.25;
                    const floatingOffset = productIndex % 2 === 0 ? 0 : 12;

                    return (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.45,
                          delay: productIndex * 0.05,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{
                          y: -10,
                          rotate: 0,
                          scale: 1.02,
                          transition: { duration: 0.25 },
                        }}
                        style={{
                          rotate: baseTilt,
                          marginBottom: floatingOffset,
                        }}
                        className='shrink-0'
                      >
                        <Link
                          href={product.href}
                          className='group/product block w-36 md:w-48 lg:w-60'
                        >
                          <div className='relative aspect-4/5 overflow-hidden rounded-2xl border border-white/25 bg-black/30'>
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className='object-center transition-transform duration-500 ease-out group-hover/product:scale-110'
                              sizes='(max-width: 768px) 144px, (max-width: 1200px) 176px, 192px'
                            />
                            <div className='absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent' />
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Collections;

'use client';

import { cn } from '@/lib/utils';
import {
  IconBolt,
  IconHeart,
  IconMapPin,
  IconMenu2,
  IconSearch,
  IconShoppingBag,
  IconUser,
  IconX,
} from '@tabler/icons-react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { type FC, useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Women', href: '#curated-for-her' },
  { label: 'Men', href: '#curated-for-him' },
  { label: 'Beauty', href: '#collection-beauty' },
  { label: 'Accessories', href: '#collection-bags' },
  { label: 'Gifts', href: '#gifts' },
  { label: 'Sale', href: '#sale' },
] as const;

const Header: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <>
      <div className='relative z-50 h-8 bg-ink text-ivory text-[11px] tracking-micro uppercase flex items-center justify-center overflow-hidden'>
        <div className='flex gap-12 whitespace-nowrap ticker-marquee'>
          {Array.from({ length: 2 }).map((_, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static
            <div
              key={i}
              className='flex gap-12 items-center pr-12'
            >
              <span className='flex items-center gap-2'>
                <IconBolt
                  size={12}
                  className='text-saffron'
                  stroke={2.5}
                />
                60-minute delivery, live in Bengaluru
              </span>
              <span className='opacity-40'>—</span>
              <span>Free shipping over ₹1,499</span>
              <span className='opacity-40'>—</span>
              <span>New drops every Thursday, 10am IST</span>
              <span className='opacity-40'>—</span>
              <span>Festive edit · live now</span>
              <span className='opacity-40'>—</span>
            </div>
          ))}
        </div>
      </div>

      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-500',
          scrolled
            ? 'backdrop-blur-2xl border-b border-hairline'
            : 'bg-transparent',
        )}
      >
        <div className='max-w-360 mx-auto px-5 md:px-10'>
          <div className='h-16 flex items-center justify-between gap-6'>
            <div className='flex items-center gap-3 md:gap-5 flex-1'>
              <button
                type='button'
                onClick={() => setMenuOpen(true)}
                className='lg:hidden size-9 rounded-full grid place-items-center hover:bg-muted transition'
                aria-label='Open menu'
              >
                <IconMenu2
                  size={18}
                  stroke={1.6}
                />
              </button>

              <button
                type='button'
                className='hidden md:flex items-center gap-2 text-[12.5px] text-muted-foreground hover:text-foreground transition'
              >
                <span className='relative flex size-2'>
                  <span className='absolute inset-0 rounded-full bg-vermilion animate-ping opacity-60' />
                  <span className='relative rounded-full size-2 bg-vermilion' />
                </span>
                <IconMapPin
                  size={14}
                  stroke={1.6}
                />
                <span className='font-medium text-foreground'>
                  Bengaluru
                </span>
                <span className='text-muted-foreground/80'>·</span>
                <span className='tabular-nums'>58 min</span>
              </button>
            </div>

            <Link
              href='/'
              className='inline-block transition-opacity hover:opacity-80'
            >
              <Image
                src='/logo.png'
                alt='Slikk logo'
                width={100}
                height={100}
                className='invert'
              />
            </Link>

            <div className='flex items-center justify-end gap-1 md:gap-2 flex-1'>
              <button
                type='button'
                onClick={() => setSearchOpen(true)}
                className='size-9 rounded-full grid place-items-center hover:bg-muted transition'
                aria-label='Search'
              >
                <IconSearch
                  size={18}
                  stroke={1.6}
                />
              </button>
              <Link
                href='/wishlist'
                className='hidden md:grid size-9 rounded-full place-items-center hover:bg-muted transition'
                aria-label='Wishlist'
              >
                <IconHeart
                  size={18}
                  stroke={1.6}
                />
              </Link>
              <Link
                href='/account'
                className='hidden md:grid size-9 rounded-full place-items-center hover:bg-muted transition'
                aria-label='Account'
              >
                <IconUser
                  size={18}
                  stroke={1.6}
                />
              </Link>
              <Link
                href='/cart'
                className='relative h-9 px-3 ml-1 rounded-full bg-ink text-ivory inline-flex items-center gap-2 text-[12.5px] font-medium hover:bg-ink/90 transition'
              >
                <IconShoppingBag
                  size={15}
                  stroke={1.8}
                />
                <span className='tabular-nums'>2</span>
                <span className='hidden md:inline opacity-50'>·</span>
                <span className='hidden md:inline tabular-nums'>₹4,280</span>
              </Link>
            </div>
          </div>

          <nav className='hidden lg:flex items-center justify-center gap-9 h-10 border-t border-hairline'>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className='text-[12.5px] text-foreground/80 hover:text-foreground transition-colors'
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-60 glass-dark'
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className='max-w-3xl mx-auto mt-24 px-6'
            >
              <div className='bg-background rounded-3xl shadow-float overflow-hidden'>
                <div className='flex items-center gap-4 px-6 h-20 border-b border-hairline'>
                  <IconSearch
                    size={22}
                    stroke={1.5}
                    className='text-muted-foreground'
                  />
                  <input
                    autoFocus
                    placeholder='Search brands, styles, categories…'
                    className='flex-1 bg-transparent outline-none text-[22px] placeholder:text-muted-foreground/60'
                  />
                  <button
                    type='button'
                    onClick={() => setSearchOpen(false)}
                    className='size-9 rounded-full grid place-items-center hover:bg-muted transition'
                  >
                    <IconX
                      size={18}
                      stroke={1.6}
                    />
                  </button>
                </div>
                <div className='p-6'>
                  <p className='text-[11px] tracking-micro uppercase text-muted-foreground mb-3'>
                    Trending now
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {[
                      'Linen shirts',
                      'Mokobara',
                      'Kurta sets',
                      'White sneakers',
                      'Bodycon',
                      'Gifts under ₹2k',
                    ].map((q) => (
                      <button
                        key={q}
                        type='button'
                        className='h-8 px-3 rounded-full text-[12.5px] bg-muted hover:bg-secondary transition'
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className='fixed inset-0 z-60 bg-background lg:hidden'
          >
            <div className='h-16 flex items-center justify-between px-5 border-b border-hairline'>
              <span className='font-display text-2xl tracking-display'>
                slikk<span className='text-saffron'>.</span>
              </span>
              <button
                type='button'
                onClick={() => setMenuOpen(false)}
                className='size-9 rounded-full grid place-items-center hover:bg-muted'
                aria-label='Close'
              >
                <IconX
                  size={18}
                  stroke={1.6}
                />
              </button>
            </div>
            <nav className='px-8 py-12 flex flex-col gap-6'>
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className='font-display text-5xl tracking-display text-foreground'
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

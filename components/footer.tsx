'use client';

import { NAVIGATION } from '@/lib/const';
import {
  IconArrowUpRight,
  IconBrandApple,
  IconBrandFacebook,
  IconBrandGooglePlay,
  IconBrandInstagram,
} from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

const FOOTER_COLUMNS = [
  { title: 'Shop', links: NAVIGATION.categories },
  { title: 'Help', links: NAVIGATION.help },
  { title: 'Company', links: NAVIGATION.quickLinks },
  { title: 'Legal', links: NAVIGATION.policies },
] as const;

const Footer: FC = () => {
  return (
    <footer className='relative bg-ivory border-t border-hairline mt-10'>
      {/* Newsletter / closing marquee */}
      <section className='bg-ink text-ivory'>
        <div className='max-w-360 mx-auto px-5 md:px-10 py-16 md:py-24'>
          <div className='grid md:grid-cols-12 gap-10 md:gap-12 items-end'>
            <div className='md:col-span-7'>
              <div className='text-[11px] tracking-micro uppercase opacity-60 mb-5'>
                Stay in the loop
              </div>
              <h2 className='font-display text-5xl md:text-7xl lg:text-[7rem] leading-[0.92] tracking-display'>
                Dressed <br />
                <span className='italic text-saffron'>&amp; delivered.</span>
              </h2>
              <p className='mt-5 text-[15px] leading-normal text-ivory/70 max-w-md'>
                Early access to drops, invite only previews, and the occasional
                BTS from our studio in Bengaluru.
              </p>
            </div>
            <div className='md:col-span-5'>
              <form className='group'>
                <div className='relative flex items-center h-14 rounded-full border border-ivory/20 focus-within:border-ivory transition bg-ivory/5 backdrop-blur-sm overflow-hidden'>
                  <input
                    type='email'
                    required
                    placeholder='you@domain.in'
                    className='flex-1 bg-transparent h-full px-6 text-[15px] placeholder:text-ivory/40 outline-none text-ivory'
                  />
                  <button
                    type='submit'
                    className='h-11 mr-1.5 px-5 rounded-full bg-ivory text-ink font-medium text-[13.5px] inline-flex items-center gap-1.5 hover:opacity-90 transition'
                  >
                    Subscribe
                    <IconArrowUpRight
                      size={13}
                      stroke={2}
                    />
                  </button>
                </div>
                <p className='mt-3 text-[11.5px] text-ivory/50'>
                  One email a fortnight. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Main footer */}
      <div className='max-w-360 mx-auto px-5 md:px-10 py-14 md:py-20'>
        <div className='grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8'>
          {/* Brand block */}
          <div className='col-span-2 md:col-span-5 lg:col-span-4'>
            <Link
              href='/'
              className='inline-block transition-opacity hover:opacity-80'
            >
              <Image
                src='/slikk/logo.png'
                alt='Slikk logo'
                width={200}
                height={200}
                className='invert'
              />
            </Link>
            <p className='mt-5 text-[13.5px] leading-[1.6] text-muted-foreground max-w-xs'>
              India’s quickest fashion delivery. Serving Bengaluru and counting.
            </p>

            <div className='mt-7 space-y-3'>
              <p className='text-[11px] tracking-micro uppercase text-muted-foreground'>
                Get the app
              </p>
              <div className='flex gap-2.5 flex-wrap'>
                <Link
                  href='https://apps.apple.com/in/app/slikk/id6618158215'
                  className='group h-12 px-4 rounded-2xl bg-ink text-ivory inline-flex items-center gap-3 hover:opacity-90 transition'
                >
                  <IconBrandApple
                    size={22}
                    stroke={1.5}
                  />
                  <div className='flex flex-col items-start leading-tight'>
                    <span className='text-[9px] uppercase tracking-[0.18em] opacity-60'>
                      Download on
                    </span>
                    <span className='text-[13px] font-medium'>App Store</span>
                  </div>
                </Link>
                <Link
                  href='https://play.google.com/store/apps/details?id=app.slikk.club'
                  className='h-12 px-4 rounded-2xl bg-ink text-ivory inline-flex items-center gap-3 hover:opacity-90 transition'
                >
                  <IconBrandGooglePlay
                    size={20}
                    stroke={1.5}
                  />
                  <div className='flex flex-col items-start leading-tight'>
                    <span className='text-[9px] uppercase tracking-[0.18em] opacity-60'>
                      Get it on
                    </span>
                    <span className='text-[13px] font-medium'>Google Play</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div
              key={col.title}
              className='md:col-span-2'
            >
              <h4 className='text-[11px] tracking-micro uppercase text-foreground mb-4 md:mb-5'>
                {col.title}
              </h4>
              <ul className='space-y-3'>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className='text-[13px] text-muted-foreground hover:text-ink transition-colors'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className='mt-14 pt-8 border-t border-hairline flex flex-col md:flex-row gap-5 items-start md:items-center justify-between'>
          <div className='flex items-center gap-4'>
            <p className='text-[12px] text-muted-foreground'>
              © 2024 SLIKSYNC TECHNOLOGIES PRIVATE LIMITED All Rights Reserved.
            </p>
          </div>

          <div className='flex items-center gap-5'>
            <div className='flex items-center gap-2'>
              <span className='relative flex size-2'>
                <span className='absolute inset-0 rounded-full bg-green-500 animate-ping opacity-60' />
                <span className='relative size-2 rounded-full bg-green-500' />
              </span>
              <span className='text-[12px] text-muted-foreground'>
                All systems live · 58 min ETA
              </span>
            </div>

            <div className='flex items-center gap-1'>
              {[
                {
                  Icon: IconBrandInstagram,
                  href: 'https://www.instagram.com/slikk.club',
                },
                {
                  Icon: IconBrandFacebook,
                  href: 'https://www.facebook.com/Slikk.Club',
                },
              ].map(({ Icon, href }) => (
                <Link
                  key={href}
                  href={href}
                  className='size-9 rounded-full grid place-items-center hover:bg-muted transition text-muted-foreground hover:text-ink'
                >
                  <Icon
                    size={17}
                    stroke={1.5}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

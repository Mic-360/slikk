'use client';

import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  IconBrandInstagram,
  IconBrandFacebook,

  IconHeart,
  IconMail,
  IconBrandGooglePlay,
  IconBrandApple,
  IconArrowUpRight,
} from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { BENEFITS, NAVIGATION } from '@/lib/const';

const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => (
  <div className='flex flex-col space-y-4'>
    <h5 className='text-[13px] font-bold uppercase tracking-widest text-foreground/90'>
      {title}
    </h5>
    <ul className='flex flex-col space-y-3'>
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className='text-[13px] text-muted-foreground hover:text-primary flex items-center group transition-colors'
          >
            {link.label}
            <IconArrowUpRight
              size={12}
              className='ml-1 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all'
            />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: FC = () => {
  return (
    <footer className='w-full bg-background'>
      <Image
        src='https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/product/481ba01d38294d4dbb5911dd4a5d6c11_bottom_header_web.webp'
        alt='Footer background'
        height={400}
        width={1920}
        className='object-cover object-center'
      />
      <div className='bg-muted/30 py-12'>
        <div className='mx-auto px-4'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4'>
            {BENEFITS.map((item) => (
              <div
                key={item.label}
                className='flex flex-col items-center text-center group'
              >
                <div className='size-12 rounded-xl bg-background flex items-center justify-center mb-2 transition-transform duration-300 group-hover:-translate-y-1'>
                  <item.icon
                    size={24}
                    stroke={1.5}
                    className='text-primary'
                  />
                </div>
                <h3 className='text-sm font-semibold tracking-tight text-foreground'>
                  {item.label}
                </h3>
                <p className='text-xs text-muted-foreground mt-1'>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='bg-background pt-16 pb-8'>
        <div className='mx-auto px-4 sm:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16'>
            <div className='lg:col-span-4 flex flex-col space-y-8'>
              <Link
                href='/'
                className='inline-block transition-opacity hover:opacity-80'
              >
                <Image
                  src='/logo.png'
                  alt='Slikk logo'
                  width={200}
                  height={200}
                  className='invert'
                />
              </Link>

              <div className='space-y-4'>
                <h4 className='text-[17px] font-semibold tracking-tight'>
                  Experience the Slikk App
                </h4>
                <div className='flex flex-wrap gap-3'>
                  <Button
                    variant='outline'
                    className='h-12 px-4 rounded-xl gap-3 bg-foreground text-white border-border/60 hover:bg-accent/50'
                  >
                    <Link
                      href='https://play.google.com/store/apps/details?id=app.slikk.club'
                      className='flex items-center justify-between gap-2'
                    >
                      <IconBrandGooglePlay size={44} />
                      <div className='flex flex-col items-start leading-tight'>
                        <span className='text-[9px] uppercase tracking-wider opacity-60'>
                          Get it on
                        </span>
                        <span className='text-sm font-semibold'>
                          Google Play
                        </span>
                      </div>
                    </Link>
                  </Button>
                  <Button
                    variant='outline'
                    className='h-12 px-4 rounded-xl gap-3 bg-foreground text-white border-border/60 hover:bg-accent/50'
                  >
                    <Link
                      href='https://apps.apple.com/in/app/slikk/id6618158215'
                      className='flex items-center justify-between gap-2'
                    >
                      <IconBrandApple size={44} />
                      <div className='flex flex-col items-start leading-tight'>
                        <span className='text-[9px] uppercase tracking-wider opacity-60'>
                          Download on the
                        </span>
                        <span className='text-sm font-semibold'>App Store</span>
                      </div>
                    </Link>
                  </Button>
                </div>
              </div>

              <div className='space-y-4'>
                <h4 className='text-[15px] font-semibold tracking-tight flex items-center gap-2'>
                  <IconMail
                    size={18}
                    className='text-muted-foreground'
                  />
                  Join the Inner Circle
                </h4>
                <div className='flex gap-2 max-w-sm'>
                  <Input
                    type='email'
                    placeholder='Enter your email'
                    className='h-11 rounded-xl bg-muted/30 border-border focus-visible:ring-1 focus-visible:ring-primary/30'
                  />
                  <Button className='h-11 rounded-xl px-6 bg-primary font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20'>
                    JOIN
                  </Button>
                </div>
              </div>

              <div className='flex items-center gap-6 pt-2'>
                <Link
                  href='https://www.instagram.com/slikk.club'
                  className='text-muted-foreground hover:text-primary transition-colors'
                >
                  <IconBrandInstagram
                    size={24}
                    stroke={1.5}
                  />
                </Link>
                <Link
                  href='https://www.facebook.com/Slikk.Club'
                  className='text-muted-foreground hover:text-primary transition-colors'
                >
                  <IconBrandFacebook
                    size={24}
                    stroke={1.5}
                  />
                </Link>
                <Badge
                  variant='secondary'
                  className='rounded-full px-3 py-1 font-medium bg-muted text-[11px] gap-1.5 border border-border/40'
                >
                  Show us some{' '}
                  <IconHeart
                    size={12}
                    className='text-red-500 fill-red-500'
                  />{' '}
                  on socials
                </Badge>
              </div>
            </div>

            <div className='lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8'>
              <FooterSection
                title='Help'
                links={NAVIGATION.help}
              />
              <FooterSection
                title='Explore'
                links={[
                  ...NAVIGATION.quickLinks,
                  ...NAVIGATION.policies.slice(0, 1),
                ]}
              />
              <FooterSection
                title='Top Categories'
                links={NAVIGATION.categories}
              />
              <FooterSection
                title='Legal'
                links={NAVIGATION.policies.slice(1)}
              />
            </div>
          </div>

          <Separator className='bg-border/40' />

          <div className='pt-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-6'>
            <p className='text-[11px] font-medium tracking-tight text-muted-foreground uppercase text-center md:text-left'>
              © 2024 SLIKSYNC TECHNOLOGIES PRIVATE LIMITED. ALL RIGHTS RESERVED.
            </p>
            <div className='flex items-center gap-4'>
              <Link
                href='/about'
                className='text-[11px] font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors'
              >
                Who are we
              </Link>
              <Avatar className='size-14 transition-all duration-300 ring-offset-2 ring-offset-background'>
                <AvatarImage
                  src={'/favicon.png'}
                  alt='Slikk team linkedin or something'
                  className='object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <AvatarFallback className='bg-muted text-[10px] font-bold'>
                  S
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

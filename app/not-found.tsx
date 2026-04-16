import { IconArrowLeft, IconSearch, IconSparkles } from '@tabler/icons-react';
import Link from 'next/link';

const STATS = [
  {
    label: 'Next live drop',
    value: 'Thursday · 10am IST',
  },
  {
    label: 'Delivery zone',
    value: 'Bengaluru · 58 min',
  },
  {
    label: 'Catalog status',
    value: 'Curated & ready',
  },
] as const;

export default function NotFound() {
  return (
    <main className='relative flex flex-1 overflow-hidden bg-background'>
      <div className='absolute inset-0 grain pointer-events-none opacity-60' />

      <div className='absolute -top-28 left-[-10%] size-128 rounded-full bg-saffron/20 blur-3xl dark:bg-saffron/10' />
      <div className='absolute -bottom-40 right-[-12%] size-136 rounded-full bg-vermilion/15 blur-3xl dark:bg-vermilion/10' />
      <div className='absolute inset-y-0 left-1/2 w-px bg-hairline/80' />

      <div className='relative z-10 mx-auto w-full max-w-360 px-5 md:px-10 py-14 md:py-20 lg:py-24'>
        <div className='grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14'>
          <section className='max-w-2xl'>
            <div className='mt-8 space-y-5 md:space-y-6'>
              <p className='text-[11px] tracking-micro uppercase text-muted-foreground'>
                Lost in the lookbook
              </p>

              <h1 className='max-w-4xl font-display text-6xl leading-[0.9] tracking-display text-ink sm:text-7xl md:text-[7.5rem] lg:text-[8.5rem]'>
                This page
                <span className='italic text-saffron'>
                  {' '}
                  missed the fitting.
                </span>
              </h1>

              <p className='max-w-xl text-[15px] leading-[1.75] text-muted-foreground md:text-[16px]'>
                The link you followed may have moved, sold out, or slipped
                behind the rack. Let’s get you back to the collections where the
                good stuff is waiting.
              </p>
            </div>

            <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
              <Link
                href='/'
                className='inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 text-[13.5px] font-medium text-ivory transition hover:opacity-90'
              >
                <IconArrowLeft
                  size={16}
                  stroke={1.8}
                />
                Return home
              </Link>

              <Link
                href='/#collections'
                className='inline-flex h-12 items-center justify-center gap-2 rounded-full border border-hairline bg-card/80 px-5 text-[13.5px] font-medium text-ink backdrop-blur-sm transition hover:bg-muted'
              >
                <IconSearch
                  size={16}
                  stroke={1.8}
                />
                Browse collections
              </Link>
            </div>
          </section>

          <section className='relative lg:pl-8'>
            <div className='absolute inset-x-10 top-0 h-20 rounded-full bg-saffron/20 blur-3xl dark:bg-saffron/10' />

            <div className='relative overflow-hidden rounded-[2rem] border border-hairline bg-card/80 p-5 shadow-float backdrop-blur-xl md:p-7'>
              <div className='flex items-start justify-between gap-6'>
                <div>
                  <p className='text-[10.5px] tracking-micro uppercase text-muted-foreground'>
                    Slikk route index
                  </p>
                  <h2 className='mt-2 font-display text-4xl leading-none tracking-display text-ink md:text-5xl'>
                    Unlisted <span className='text-saffron'>404</span>
                  </h2>
                </div>

                <div className='g-background px-3 py-2 text-right'>
                  <p className='text-[10px] tracking-micro uppercase text-muted-foreground'>
                    Status
                  </p>
                  <p className='mt-1 font-mono text-[12px] text-foreground tabular-nums'>
                    LIVE · 58 MIN
                  </p>
                </div>
              </div>

              <div className='mt-7 rounded-[1.75rem] bg-ink p-5 text-ivory md:p-6'>
                <div className='flex items-center justify-between gap-4'>
                  <div className='text-[10.5px] tracking-micro uppercase text-ivory/55'>
                    Missing from catalogue
                  </div>
                </div>

                <div className='mt-8 flex items-end gap-4'>
                  <div className='font-display text-[5rem] leading-none tracking-display sm:text-[6.5rem] md:text-[7.5rem]'>
                    404
                  </div>
                  <div className='max-w-48 pb-2'>
                    <p className='text-[10.5px] tracking-micro uppercase text-ivory/55'>
                      Page status
                    </p>
                    <p className='mt-2 text-[15px] leading-[1.65] text-ivory/78'>
                      Not in stock. Not on shelf. But very much recoverable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

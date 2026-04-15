'use client';

import { IconBolt, IconPackage, IconTruck } from '@tabler/icons-react';
import { motion } from 'motion/react';
import type { FC } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

const STEPS = [
  {
    step: '01',
    title: 'Tap to order',
    copy: 'Browse 340 labels. Add to bag. Tap checkout. It takes under a minute.',
    time: '00:00',
    icon: IconBolt,
    tint: 'bg-[#faf6ed]',
  },
  {
    step: '02',
    title: 'We pack in 12',
    copy: 'Your picks are lifted off our micro-warehouse floor and checked by a human.',
    time: '00:12',
    icon: IconPackage,
    tint: 'bg-[#eee9df]',
  },
  {
    step: '03',
    title: 'At your door',
    copy: 'A slikk rider brings it to you — scooter, helmet, garment bag intact.',
    time: '00:58',
    icon: IconTruck,
    tint: 'bg-ink text-ivory',
  },
];

const AdsColumn: FC = () => {
  return (
    <section className='relative py-16 md:py-28 bg-background'>
      <div className='max-w-360 mx-auto px-5 md:px-10'>
        <div className='flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14'>
          <div>
            <div className='text-[11px] tracking-micro uppercase text-muted-foreground mb-4'>
              How it works
            </div>
            <h2 className='font-display text-4xl md:text-6xl leading-[0.95] tracking-display text-ink max-w-2xl'>
              Three steps. <br />
              <span className='italic text-muted-foreground'>
                Under sixty minutes.
              </span>
            </h2>
          </div>
          <div className='text-[13px] text-muted-foreground max-w-xs leading-relaxed'>
            We built micro-fulfilment hubs in your neighbourhood so your rider
            is, quite literally, around the corner.
          </div>
        </div>

        <div className='grid md:grid-cols-3 gap-4'>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-[28px] ${step.tint} p-7 md:p-10 min-h-85 md:min-h-100 flex flex-col justify-between`}
            >
              {/* Background number */}
              <div
                aria-hidden
                className='absolute -right-6 -bottom-8 font-display text-[18rem] leading-none tracking-display opacity-[0.05] pointer-events-none'
              >
                {step.step}
              </div>

              <div className='relative flex items-start justify-between'>
                <div className='size-11 rounded-2xl border border-current/15 backdrop-blur-sm grid place-items-center bg-background/40'>
                  <step.icon
                    size={20}
                    stroke={1.5}
                  />
                </div>
                <div className='font-mono tabular-nums text-[11px] tracking-widest opacity-70'>
                  {step.time}
                </div>
              </div>

              <div className='relative'>
                <div className='text-[10.5px] tracking-micro uppercase opacity-60 mb-3'>
                  Step {step.step}
                </div>
                <h3 className='font-display text-3xl md:text-4xl leading-none tracking-display mb-3'>
                  {step.title}
                </h3>
                <p className='text-[13.5px] leading-normal opacity-80 max-w-xs'>
                  {step.copy}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live pulse bar */}
        <div className='mt-10 flex items-center gap-5 flex-wrap'>
          <div className='inline-flex items-center gap-2.5 h-10 px-4 rounded-full bg-muted text-[12.5px]'>
            <span className='relative flex size-2'>
              <span className='absolute inset-0 rounded-full bg-vermilion animate-ping opacity-70' />
              <span className='relative size-2 rounded-full bg-vermilion' />
            </span>
            1,284 orders out for delivery right now
          </div>
          <div className='flex -space-x-2'>
            {[
              'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/2ad35585ff224786a235eab54290d2ef_soch-1.png',
              'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/3eed69d30d5341309719f6a0f51d063b_BaugeBagsy.png',
              'https://slikk-dev-assets-public.s3.ap-south-1.amazonaws.com/other/2ad35585ff224786a235eab54290d2ef_soch-1.png',
            ].map((src) => (
              <div
                key={src}
                className='size-9 rounded-full border-2 border-background bg-secondary overflow-hidden'
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            ))}
          </div>
          <span className='text-[12.5px] text-muted-foreground'>
            Riders currently active across 14 Bengaluru neighbourhoods
          </span>
        </div>
      </div>
    </section>
  );
};

export default AdsColumn;

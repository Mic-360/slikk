import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import type { FC, ReactNode } from 'react';

interface ColumnLayoutProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
}

const ColumnLayout: FC<ColumnLayoutProps> = ({
  children,
  className,
  title,
  subtitle,
  badge,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-5 w-full h-full px-4 md:px-6 py-6 md:py-12',
        className,
      )}
    >
      {(title || subtitle || badge) && (
        <div className='flex flex-col gap-1 px-1'>
          {badge && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='text-xs font-black tracking-[0.3em] uppercase text-primary'
            >
              {badge}
            </motion.span>
          )}
          <div className='flex items-end justify-between gap-4'>
            <div className='flex flex-col'>
              {title && (
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className='text-3xl md:text-5xl font-black tracking-tighter uppercase'
                >
                  {title}
                </motion.h3>
              )}
              {subtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className='text-[11px] md:text-xs text-muted-foreground font-black uppercase tracking-wider opacity-60'
                >
                  {subtitle}
                </motion.p>
              )}
            </div>
          </div>
        </div>
      )}
      <div className='flex-1 relative'>{children}</div>
    </div>
  );
};

export default ColumnLayout;

'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import {
  IconArrowUp,
  IconChevronRight,
  IconCompass,
  IconHeart,
  IconLayoutGrid,
  IconMenu2,
  IconSearch,
  IconShoppingCart,
  IconUser,
  IconX,
} from '@tabler/icons-react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { type FC, useEffect, useRef, useState } from 'react';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const CATEGORY_SCROLL_OFFSET = 160;
const TYPEWRITER_TEXT = 'Search for brands, styles, and many more.';

const NAV_ITEMS = [
  { label: 'Categories', icon: IconLayoutGrid, href: '/categories' },
  { label: 'Discover', icon: IconCompass, href: '/discover' },
  { label: 'Wishlist', icon: IconHeart, href: '/wishlist' },
  { label: 'Cart', icon: IconShoppingCart, href: '/cart' },
  { label: 'Sign In', icon: IconUser, href: '/signin' },
] as const;

const CATEGORIES = [
  { label: 'For You', image: '/header/foryou.webp', targetId: 'home-top' },
  { label: 'Women', image: '/header/women.png', targetId: 'curated-for-her' },
  { label: 'Men', image: '/header/men.png', targetId: 'curated-for-him' },
  {
    label: 'Beauty',
    image: '/header/beauty.png',
    targetId: 'collection-beauty',
  },
  {
    label: 'Accessories',
    image: '/header/accessories.png',
    targetId: 'collection-bags',
  },
  {
    label: 'Footwear',
    image: '/header/footwear.png',
    targetId: 'section-categories',
  },
  { label: 'Home', image: '/header/home.png', targetId: 'collection-home' },
  {
    label: 'Jewellery',
    image: '/header/jewellery.webp',
    targetId: 'collection-jewellery',
  },
] as const;

type HeaderCategory = (typeof CATEGORIES)[number];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
};

const catStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.3 } },
};

const catItem = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: EASE },
  },
};

function useTypewriter(text: string, speed = 58) {
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState<'typing' | 'hold' | 'erasing' | 'gap'>(
    'typing',
  );

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (phase === 'typing') {
      if (displayed.length < text.length) {
        t = setTimeout(
          () => setDisplayed(text.slice(0, displayed.length + 1)),
          speed,
        );
      } else {
        t = setTimeout(() => setPhase('hold'), 2200);
      }
    } else if (phase === 'hold') {
      t = setTimeout(() => setPhase('erasing'), 400);
    } else if (phase === 'erasing') {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), speed / 2.2);
      } else {
        t = setTimeout(() => setPhase('gap'), 550);
      }
    } else {
      t = setTimeout(() => setPhase('typing'), 200);
    }
    return () => clearTimeout(t);
  }, [displayed, phase, text, speed]);

  return displayed;
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key='scrim'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className='fixed inset-0 z-40 bg-black/25 backdrop-blur-[3px]'
            onClick={onClose}
            aria-hidden='true'
          />

          <motion.div
            key='panel'
            initial={{ opacity: 0, scale: 0.82, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.82, y: -6 }}
            transition={{ duration: 0.28, ease: EASE }}
            style={{ transformOrigin: 'top right' }}
            className={cn(
              'fixed top-17 right-3 z-50 w-64',
              'rounded-2xl overflow-hidden',
              'bg-background/96 backdrop-blur-2xl',
              'border border-border/40',
              'shadow-[0_20px_60px_oklch(0_0_0/0.20)]',
            )}
            role='dialog'
            aria-label='Navigation menu'
          >
            {NAV_ITEMS.map((item, i) => (
              <div key={item.label}>
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.03 + 0.04 * i,
                    duration: 0.22,
                    ease: EASE,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3.5',
                      'text-foreground transition-colors duration-150',
                      'hover:bg-accent active:bg-accent/80',
                    )}
                  >
                    <span className='flex items-center justify-center size-8 rounded-xl bg-muted shrink-0'>
                      <item.icon
                        size={17}
                        stroke={1.7}
                        className='text-foreground'
                      />
                    </span>
                    <span className='flex-1 text-[15px] font-medium leading-none'>
                      {item.label}
                    </span>
                    <IconChevronRight
                      size={14}
                      stroke={2}
                      className='text-muted-foreground/50 shrink-0'
                    />
                  </Link>
                </motion.div>

                {i < NAV_ITEMS.length - 1 && (
                  <div className='h-px bg-border/50 ml-13 mr-4' />
                )}
              </div>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function SearchBar() {
  const [focused, setFocused] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const placeholder = useTypewriter(TYPEWRITER_TEXT);

  const clearQuery = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  return (
    <motion.div
      className={cn(
        'relative flex items-center h-10 w-full rounded-full border',
        'bg-muted/60 backdrop-blur-sm transition-shadow duration-300',
        focused
          ? 'border-primary/50 shadow-[0_0_0_3px_oklch(0.527_0.154_150.069/0.12)]'
          : 'border-border hover:border-muted-foreground/30',
      )}
      layout
    >
      <motion.div
        className='flex items-center justify-center pl-3 pr-2 shrink-0'
        animate={{
          scale: focused ? 0.9 : 1,
          color: focused ? 'var(--primary)' : 'var(--muted-foreground)',
        }}
        transition={{ duration: 0.2 }}
      >
        <IconSearch size={16} />
      </motion.div>

      <input
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        className='flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/55 outline-none min-w-0'
        aria-label='Search products'
      />

      <AnimatePresence>
        {query.length > 0 && (
          <motion.button
            key='clear'
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.15 }}
            onClick={clearQuery}
            className='flex items-center justify-center pr-3 pl-1 text-muted-foreground hover:text-foreground shrink-0'
            aria-label='Clear search'
          >
            <IconX size={14} />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function NavItem({
  label,
  icon: Icon,
  href,
  badge,
}: {
  label: string;
  icon: typeof IconUser;
  href: string;
  badge?: number;
}) {
  return (
    <motion.div variants={itemVariants}>
      <Link
        href={href}
        className='group relative flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl text-muted-foreground hover:text-foreground transition-colors duration-200'
        aria-label={label}
      >
        <span className='relative z-10 flex flex-col items-center gap-0.5'>
          <span className='relative'>
            <Icon
              size={20}
              stroke={1.6}
            />
            {badge != null && badge > 0 && (
              <span className='absolute -top-1.5 -right-1.5 flex items-center justify-center size-3.5 rounded-full bg-primary text-primary-foreground text-[9px] font-bold leading-none'>
                {badge > 9 ? '9+' : badge}
              </span>
            )}
          </span>
          <span className='text-[10px] font-medium tracking-wide relative z-10 leading-none'>
            {label}
          </span>
        </span>
      </Link>
    </motion.div>
  );
}

function CategoryPill({
  label,
  image,
  isActive,
  onSelect,
}: {
  label: string;
  image: string;
  isActive: boolean;
  onSelect: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const highlighted = hovered || isActive;

  return (
    <motion.div
      variants={catItem}
      className='relative shrink-0 mt-2'
    >
      <motion.button
        type='button'
        className='group relative flex flex-col items-center gap-2 rounded-t-[1.65rem] rounded-b-2xl px-3 py-2.5'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onSelect}
        aria-label={label}
        whileTap={{ scale: 0.98 }}
      >
        {isActive && (
          <>
            <motion.span
              layoutId='active-category-shell'
              transition={{ duration: 0.32, ease: EASE }}
              className='pointer-events-none absolute -inset-x-2 -inset-y-2 -z-10 rounded-t-xl bg-background'
            />
            <motion.span
              layoutId='active-category-bridge'
              transition={{ duration: 0.32, ease: EASE }}
              className='pointer-events-none absolute top-full left-1/2 -z-10 h-8 w-[calc(100%+1.04rem)] -translate-x-1/2 bg-background'
            />
          </>
        )}

        <motion.div
          animate={{
            scale: highlighted ? 1.05 : 1,
          }}
          transition={{ duration: 0.2, ease: EASE }}
        >
          <Avatar
            className={cn(
              'size-14 transition-all duration-300 ring-offset-2',
              highlighted
                ? 'scale-105 ring-2 ring-primary/70 shadow-lg shadow-primary/25 ring-offset-background'
                : 'ring-1 ring-black/12 shadow-sm ring-offset-[#ddd0ca]',
            )}
          >
            <AvatarImage
              src={image}
              alt={label}
              className='object-cover transition-transform duration-500 group-hover:scale-110'
            />
            <AvatarFallback className='bg-muted text-[10px] font-bold'>
              {label.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.span
          className='text-[11px] font-semibold tracking-wide text-center leading-tight transition-colors duration-200'
          animate={{
            color: highlighted
              ? 'oklch(0.527 0.154 150.069)'
              : 'oklch(0.325 0.012 214.4)',
          }}
          transition={{ duration: 0.2, ease: EASE }}
        >
          {label}
        </motion.span>
      </motion.button>
    </motion.div>
  );
}

const Header: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [showCategoryRail, setShowCategoryRail] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [activeCategory, setActiveCategory] =
    useState<HeaderCategory['label']>('For You');
  const lastScrollYRef = useRef(0);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToElement = (element: HTMLElement) => {
    const y = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: Math.max(y - CATEGORY_SCROLL_OFFSET, 0),
      behavior: 'smooth',
    });
  };

  const scrollToTarget = (targetId: HeaderCategory['targetId']) => {
    if (targetId === 'home-top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState(null, '', '/#home-top');
      return;
    }

    const target = document.getElementById(targetId);
    if (!target) return;

    scrollToElement(target);
    window.history.replaceState(null, '', `/#${targetId}`);
  };

  const handleCategorySelect = (category: HeaderCategory) => {
    setActiveCategory(category.label);

    if (pathname !== '/') {
      router.push(`/#${category.targetId}`);
      return;
    }

    scrollToTarget(category.targetId);
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setShowScrollToTop(y > 1200);

      const delta = y - lastScrollYRef.current;
      if (y <= 80) {
        setShowCategoryRail(true);
      } else if (delta > 4) {
        setShowCategoryRail(false);
      } else if (delta < -4) {
        setShowCategoryRail(true);
      }

      lastScrollYRef.current = y;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setShowBadge((v) => !v), 3500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (pathname !== '/') return;

    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    const match = CATEGORIES.find((category) => category.targetId === hash);
    if (!match) return;

    setActiveCategory(match.label);

    const raf = window.requestAnimationFrame(() => {
      if (hash === 'home-top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const target = document.getElementById(hash);
      if (!target) return;

      scrollToElement(target);
    });

    return () => window.cancelAnimationFrame(raf);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial='hidden'
        animate='visible'
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-background/90 backdrop-blur-xl shadow-[0_1px_24px_oklch(0_0_0/0.08)]'
            : 'bg-background',
        )}
      >
        <div className='mx-auto px-4 sm:px-6'>
          <motion.div
            variants={containerVariants}
            className='flex items-center h-16 gap-3'
          >
            <motion.div
              variants={itemVariants}
              className='shrink-0'
            >
              <Link
                href='/'
                className='flex items-center group'
                aria-label='Slikk home'
              >
                <motion.div
                  className='h-11 overflow-hidden'
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2, ease: EASE }}
                >
                  <AnimatePresence
                    mode='wait'
                    initial={false}
                  >
                    {!showBadge ? (
                      <motion.div
                        key='logo'
                        className='relative h-10 w-24'
                        initial={{ opacity: 0, y: 7 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -7 }}
                        transition={{ duration: 0.4, ease: EASE }}
                      >
                        <Image
                          src='/favicon.png'
                          alt='Slikk logo'
                          fill
                          className='object-contain object-left'
                          sizes='96px'
                          priority
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        key='badge'
                        className='h-10 w-24 flex items-center gap-2'
                        initial={{ opacity: 0, y: 7 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -7 }}
                        transition={{ duration: 0.4, ease: EASE }}
                      >
                        <div className='w-10 h-10 rounded-lg bg-[#0A090A] text-white flex items-center justify-center text-[20px] font-black shrink-0 select-none'>
                          60
                        </div>
                        <span className='font-bold text-sm text-foreground whitespace-nowrap'>
                          Mins
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className='flex-1 min-w-0'
            >
              <SearchBar />
            </motion.div>

            <nav
              className='hidden md:flex items-center gap-1 shrink-0'
              aria-label='Main navigation'
            >
              {NAV_ITEMS.map((item) => (
                <NavItem
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                  href={item.href}
                  badge={
                    item.label === 'Cart'
                      ? 2
                      : item.label === 'Wishlist'
                        ? 5
                        : undefined
                  }
                />
              ))}
            </nav>

            <motion.button
              variants={itemVariants}
              onClick={() => setMobileMenuOpen((v) => !v)}
              className={cn(
                'md:hidden flex items-center justify-center shrink-0',
                'size-10 rounded-xl transition-colors duration-200',
                'text-muted-foreground hover:text-foreground',
                mobileMenuOpen
                  ? 'bg-accent text-foreground'
                  : 'hover:bg-accent',
              )}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <AnimatePresence
                mode='wait'
                initial={false}
              >
                {mobileMenuOpen ? (
                  <motion.span
                    key='close'
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <IconX
                      size={20}
                      stroke={2}
                    />
                  </motion.span>
                ) : (
                  <motion.span
                    key='open'
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <IconMenu2
                      size={20}
                      stroke={1.8}
                    />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      <div className='h-26 pt-16 sm:h-27' />

      <motion.div
        animate={{
          y: showCategoryRail ? 0 : -115,
          opacity: showCategoryRail ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: EASE }}
        className={cn(
          'fixed inset-x-0 top-16 z-40',
          showCategoryRail ? 'pointer-events-auto' : 'pointer-events-none',
        )}
      >
        <div className='relative bg-[#ddd0ca]/95'>
          <div className='pointer-events-none absolute inset-x-0 -bottom-10 h-10 bg-linear-to-b blur-sm' />

          <div className='mx-auto px-3 sm:px-6'>
            <div className='no-scrollbar overflow-x-auto overflow-y-hidden whitespace-nowrap'>
              <motion.nav
                variants={catStagger}
                initial='hidden'
                animate='visible'
                className='relative z-10 flex min-w-max items-start gap-5 px-1 pt-1.5 pb-5 md:min-w-0 md:justify-around md:gap-6'
                aria-label='Shop categories'
              >
                {CATEGORIES.map((category) => (
                  <CategoryPill
                    key={category.label}
                    label={category.label}
                    image={category.image}
                    isActive={activeCategory === category.label}
                    onSelect={() => handleCategorySelect(category)}
                  />
                ))}
              </motion.nav>
            </div>
          </div>
        </div>
      </motion.div>

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.85 }}
            transition={{ duration: 0.28, ease: EASE }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='fixed right-5 bottom-6 z-50 inline-flex size-11 items-center justify-center rounded-full border border-white/50 bg-black/75 text-white shadow-[0_14px_34px_oklch(0_0_0/0.3)] backdrop-blur-md transition-transform hover:-translate-y-0.5 hover:bg-black/90'
            aria-label='Scroll to top'
          >
            <IconArrowUp
              size={18}
              stroke={2.2}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

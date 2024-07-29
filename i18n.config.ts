import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'pl'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: 'EN',
  pl: 'PL',
};

export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation(
  { locales }
);

import type { Locale } from '../types';

interface BilingualString {
  fr?: string;
  en?: string;
}

export const resolveLocale = (obj: BilingualString | string | null | undefined, locale: Locale): string => {
  if (obj === null || obj === undefined) return '';
  if (typeof obj === 'string') return obj;
  return obj[locale] || obj['fr'] || (typeof obj === 'object' ? JSON.stringify(obj) : '');
};

export const snakeToCamel = (obj: Record<string, unknown>): Record<string, unknown> => {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [
            key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase()),
            value,
        ])
    );
};

import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
import { LOCALE_COOKIE } from './index';

export const requestConfig = getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = (await cookies()).get(LOCALE_COOKIE)?.value ?? 'es';

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

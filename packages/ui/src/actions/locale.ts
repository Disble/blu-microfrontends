'use server';
import { LOCALE_COOKIE } from '@repo/i18n';
import { cookies } from 'next/headers';

export async function setLocale(locale: string) {
  (await cookies()).set(LOCALE_COOKIE, locale);
}

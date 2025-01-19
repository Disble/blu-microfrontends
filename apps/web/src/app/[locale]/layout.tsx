/* eslint-disable @typescript-eslint/no-unsafe-argument -- This is a valid check */
/* eslint-disable @typescript-eslint/no-unsafe-assignment -- This is a valid check */
import '@repo/tailwind-config/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { Locale } from '@repo/i18n/routing';
import { routing } from '@repo/i18n/routing';
import { getMessages } from '@repo/i18n/server';
import { NextIntlClientProvider } from '@repo/i18n';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mi Banco',
  description: 'Tu banco en línea',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

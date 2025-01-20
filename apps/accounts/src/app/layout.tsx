import '@repo/tailwind-config/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getMessages, getLocale } from '@repo/i18n/server';
import { NextIntlClientProvider } from '@repo/i18n';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mi Banco',
  description: 'Tu banco en línea',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

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

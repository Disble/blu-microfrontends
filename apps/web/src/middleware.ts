import { middleware } from '@repo/i18n/middleware';

export default middleware;

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en)/:path*'],
};

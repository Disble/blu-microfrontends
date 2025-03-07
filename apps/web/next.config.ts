import type { NextConfig } from 'next';
import { withNextIntl } from '@repo/i18n/plugin';

const { ACCOUNTS_URL } = process.env;

const nextConfig: NextConfig = {
  // eslint-disable-next-line @typescript-eslint/require-await -- This is a valid Next.js config option
  async rewrites() {
    return [
      /**
       * Rewrites for Multi-Zones
       */
      {
        source: '/accounts',
        destination: `${ACCOUNTS_URL}/accounts`,
      },
      {
        source: '/accounts/:path*',
        destination: `${ACCOUNTS_URL}/accounts/:path*`,
      },
      {
        source: '/accounts-static/:path*',
        destination: `${ACCOUNTS_URL}/accounts-static/:path*`,
      },
      {
        source: '/cards',
        destination: `${ACCOUNTS_URL}/cards`,
      },
    ];
  },
};

export default withNextIntl(nextConfig);

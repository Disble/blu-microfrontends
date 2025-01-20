import type { NextConfig } from 'next';
import { withNextIntl } from '@repo/i18n/plugin';

const nextConfig: NextConfig = {
  assetPrefix: '/accounts-static',
  // @ts-expect-error -- This is a valid Next.js config option
  // eslint-disable-next-line @typescript-eslint/require-await -- This is a valid Next.js config option
  async rewrites() {
    return {
      beforeFiles: [
        // This rewrite is necessary to support assetPrefix only in Next 14 and below.
        // It is not necessary in Next 15.
        {
          source: '/accounts-static/_next/:path*',
          destination: '/_next/:path*',
        },
      ],
    };
  },
};

export default withNextIntl(nextConfig);

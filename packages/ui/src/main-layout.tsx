'use client';

import React from 'react';
import { useStore } from '@repo/shared-state';
import { useUserStore } from '@repo/shared-state/stores';
import { Header } from './header';
import { Footer } from './footer';
import { LoadingScreen } from './loading-screen';

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const userStore = useStore(useUserStore, (state) => state);

  if (!userStore) {
    return <LoadingScreen />;
  }

  const { theme } = userStore;

  return (
    <div
      className={`flex flex-col min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

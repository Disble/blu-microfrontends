'use client';

import { MainLayout } from '@repo/ui/main-layout';
import { useEffect, useState, type JSX } from 'react';
import { useStore } from '@repo/shared-state';
import { useUserStore } from '@repo/shared-state/stores';
import { LoadingScreen } from '@repo/ui/loading-screen';
import AccountSummary from '../components/account-summary';
import QuickActions from '../components/quick-actions';

export default function Page(): JSX.Element {
  const userStore = useStore(useUserStore, (state) => state);

  const [newName, setNewName] = useState<string>('');

  useEffect(() => {
    if (userStore) {
      setNewName(userStore.name);
    }
  }, [userStore]);

  if (!userStore) {
    return <LoadingScreen />;
  }

  const { theme, setName } = userStore;

  const handleNameChange = (e: React.FormEvent) => {
    e.preventDefault();
    setName(newName);
  };

  return (
    <MainLayout>
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">
          Bienvenido a tu Banca en Línea
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <AccountSummary />
          <QuickActions />
        </div>
        <div
          className={`mt-8 p-4 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}  rounded-lg shadow-md`}
        >
          <h2 className="text-2xl font-bold mb-4">Cambiar Nombre de Usuario</h2>
          <form
            className="flex items-center space-x-4"
            onSubmit={handleNameChange}
          >
            <input
              className={`flex-grow px-4 py-2 border rounded-md ${theme === 'light' ? '' : 'bg-gray-700 border-gray-600'} `}
              onChange={(e) => {
                setNewName(e.target.value);
              }}
              type="text"
              value={newName}
            />
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              type="submit"
            >
              Actualizar
            </button>
          </form>
        </div>
      </main>
    </MainLayout>
  );
}

'use client';

import { MainLayout } from '@repo/ui/main-layout';
import { LoadingScreen } from '@repo/ui/loading-screen';
import { useStore } from '@repo/shared-state';
import { useUserStore } from '@repo/shared-state/stores';
import AccountActions from '@/components/account-actions';
import AccountList from '@/components/account-list';

export default function AccountsPage() {
  const userStore = useStore(useUserStore, (state) => state);

  if (!userStore) {
    return <LoadingScreen />;
  }

  const { theme, setTheme } = userStore;

  return (
    <MainLayout>
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Mis Cuentas</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <AccountList />
          </div>
          <div>
            <AccountActions />
            <div
              className={`mt-8 p-4 ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}  rounded-lg shadow-md`}
            >
              <h2 className="text-2xl font-bold mb-4">Preferencias</h2>
              <div className="flex items-center justify-between">
                <span>Tema:</span>
                <button
                  className={`px-4 py-2 rounded ${
                    theme === 'light'
                      ? 'bg-gray-200 text-gray-800'
                      : 'bg-gray-600 text-white'
                  } hover:bg-opacity-90 transition-colors`}
                  onClick={() => {
                    setTheme(theme === 'light' ? 'dark' : 'light');
                  }}
                  type="button"
                >
                  {theme === 'light' ? 'Cambiar a Oscuro' : 'Cambiar a Claro'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}

'use client';

import { useStore } from '@repo/shared-state';
import { useUserStore } from '@repo/shared-state/stores';
import { LoadingScreen } from '@repo/ui/loading-screen';

export default function AccountList() {
  const userStore = useStore(useUserStore, (state) => state);

  if (!userStore) {
    return <LoadingScreen />;
  }

  const { theme } = userStore;

  const accounts = [
    {
      id: 1,
      type: 'Cuenta Corriente',
      number: '**** 1234',
      balance: 5000,
      currency: 'USD',
    },
    {
      id: 2,
      type: 'Cuenta de Ahorros',
      number: '**** 5678',
      balance: 10000,
      currency: 'USD',
    },
    {
      id: 3,
      type: 'Tarjeta de Crédito',
      number: '**** 9012',
      balance: -1500,
      currency: 'USD',
    },
    {
      id: 4,
      type: 'Cuenta de Inversión',
      number: '**** 3456',
      balance: 25000,
      currency: 'USD',
    },
  ];

  return (
    <div
      className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} shadow-md rounded-lg p-6`}
    >
      <h2 className="text-2xl font-bold mb-4">Listado de Cuentas</h2>
      <div className="space-y-4">
        {accounts.map((account) => (
          <div className="border-b pb-4 dark:border-gray-700" key={account.id}>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">{account.type}</h3>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {account.number}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">
                {account.currency}{' '}
                {account.balance.toLocaleString('es-ES', {
                  minimumFractionDigits: 2,
                })}
              </span>
              <button
                className="text-blue-600 hover:underline dark:text-blue-400"
                type="button"
              >
                Ver detalles
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

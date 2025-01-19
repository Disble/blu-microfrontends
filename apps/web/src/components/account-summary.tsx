'use client';

import { useStore } from '@repo/shared-state';
import { useUserStore } from '@repo/shared-state/stores';
import { LoadingScreen } from '@repo/ui/loading-screen';

export default function AccountSummary() {
  const userStore = useStore(useUserStore, (state) => state);

  if (!userStore) {
    return <LoadingScreen />;
  }

  const { theme } = userStore;

  const accounts = [
    { id: 1, type: 'Cuenta Corriente', number: '**** 1234', balance: 5000 },
    { id: 2, type: 'Cuenta de Ahorros', number: '**** 5678', balance: 10000 },
    { id: 3, type: 'Tarjeta de Crédito', number: '**** 9012', balance: -1500 },
  ];

  return (
    <div
      className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} shadow-md rounded-lg p-6`}
    >
      <h2 className="text-2xl font-bold mb-4">Resumen de Cuentas</h2>
      <ul className="space-y-4">
        {accounts.map((account) => (
          <li
            className="flex justify-between items-center border-b pb-2"
            key={account.id}
          >
            <div>
              <p className="font-semibold">{account.type}</p>
              <p className="text-sm text-gray-600">{account.number}</p>
            </div>
            <p
              className={`font-bold ${account.balance >= 0 ? 'text-green-600' : 'text-red-600'}`}
            >
              $
              {account.balance.toLocaleString('es-ES', {
                minimumFractionDigits: 2,
              })}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

'use client';

import { useStore } from '@repo/shared-state';
import { useUserStore } from '@repo/shared-state/stores';
import { LoadingScreen } from '@repo/ui/loading-screen';

export default function AccountActions() {
  const userStore = useStore(useUserStore, (state) => state);

  if (!userStore) {
    return <LoadingScreen />;
  }

  const { theme } = userStore;

  const actions = [
    { id: 1, name: 'Nueva Cuenta', icon: '➕' },
    { id: 2, name: 'Transferir', icon: '💸' },
    { id: 3, name: 'Pagar Tarjeta', icon: '💳' },
    { id: 4, name: 'Solicitar Préstamo', icon: '💰' },
  ];

  return (
    <div
      className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} shadow-md rounded-lg p-6`}
    >
      <h2 className="text-2xl font-bold mb-4">Acciones de Cuenta</h2>
      <div className="grid grid-cols-1 gap-4">
        {actions.map((action) => (
          <button
            className={`flex items-center justify-center ${
              theme === 'light'
                ? 'bg-gray-100 hover:bg-gray-200'
                : 'bg-gray-700 hover:bg-gray-600'
            } rounded-lg p-4 transition-colors`}
            key={action.id}
            type="button"
          >
            <span className="text-2xl mr-2">{action.icon}</span>
            <span className="font-semibold">{action.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

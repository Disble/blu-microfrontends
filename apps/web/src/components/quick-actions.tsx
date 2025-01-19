import { useStore } from '@repo/shared-state';
import { useUserStore } from '@repo/shared-state/stores';
import { LoadingScreen } from '@repo/ui/loading-screen';

export default function QuickActions() {
  const userStore = useStore(useUserStore, (state) => state);

  if (!userStore) {
    return <LoadingScreen />;
  }

  const { theme } = userStore;

  const actions = [
    { id: 1, name: 'Transferir Dinero', icon: '💸' },
    { id: 2, name: 'Pagar Servicios', icon: '📄' },
    { id: 3, name: 'Recargar Celular', icon: '📱' },
    { id: 4, name: 'Solicitar Préstamo', icon: '💰' },
  ];

  return (
    <div
      className={`${theme === 'light' ? 'bg-white' : 'bg-gray-800'} shadow-md rounded-lg p-6`}
    >
      <h2 className="text-2xl font-bold mb-4">Acciones Rápidas</h2>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <button
            className={`h-24 flex flex-col items-center justify-center rounded-lg ${theme === 'light' ? 'bg-gray-100  hover:bg-gray-200' : 'bg-gray-700 hover:bg-gray-600'} transition-colors`}
            key={action.id}
            type="button"
          >
            <span className="text-2xl mb-2">{action.icon}</span>
            <span>{action.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

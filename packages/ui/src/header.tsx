'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useStore } from '@repo/shared-state';
import { useUserStore } from '@repo/shared-state/stores';
import { LoadingScreen } from './loading-screen';

export const Header = () => {
  const pathname = usePathname();

  const userStore = useStore(useUserStore, (state) => state);

  if (!userStore) {
    return <LoadingScreen />;
  }

  const { theme, name, setTheme } = userStore;

  return (
    <header
      className={`${theme === 'light' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-200'}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a className="text-2xl font-bold" href="/">
          MiBanco
        </a>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                className={`hover:underline ${pathname === '/accounts' ? 'font-bold underline' : ''}`}
                href="/accounts"
              >
                Cuentas
              </a>
            </li>
            <li>
              <Link className="hover:underline" href="/transferencias">
                Transferencias
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/pagos">
                Pagos
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/inversiones">
                Inversiones
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <span>Hola, {name}</span>
          <button
            className={`px-4 py-2 rounded ${
              theme === 'light'
                ? 'bg-white text-blue-600'
                : 'bg-gray-600 text-white'
            } hover:bg-opacity-90 transition-colors`}
            onClick={() => {
              setTheme(theme === 'light' ? 'dark' : 'light');
            }}
            type="button"
          >
            {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
          </button>
        </div>
      </div>
    </header>
  );
};

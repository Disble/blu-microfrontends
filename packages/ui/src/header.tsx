'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useStore } from '@repo/shared-state';
import { useUserStore } from '@repo/shared-state/stores';
import { useTranslations } from '@repo/i18n';
import { LoadingScreen } from './loading-screen';
import { setLocale } from './actions/locale';

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('common');
  const userStore = useStore(useUserStore, (state) => state);

  if (!userStore) {
    return <LoadingScreen />;
  }

  const { theme, name, setTheme, language, setLanguage } = userStore;

  const changeLocale = async (newLocale: string) => {
    setLanguage(newLocale as any);
    await setLocale(newLocale);
    router.refresh(); // Refresh the page to apply the new locale
  };

  return (
    <header
      className={`${theme === 'light' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-200'}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a className="text-2xl font-bold" href="/">
          {t('appName')}
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
          <select
            className={`px-2 py-1 rounded ${
              theme === 'light'
                ? 'bg-white text-blue-600'
                : 'bg-gray-600 text-white'
            } hover:bg-opacity-90 transition-colors`}
            onChange={(e) => {
              changeLocale(e.target.value);
            }}
            value={language}
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
        </div>
      </div>
    </header>
  );
};

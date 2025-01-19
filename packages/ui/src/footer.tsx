'use client';

import { useStore } from '@repo/shared-state';
import { useUserStore } from '@repo/shared-state/stores';
import { LoadingScreen } from './loading-screen';

export const Footer = () => {
  const userStore = useStore(useUserStore, (state) => state);

  if (!userStore) {
    return <LoadingScreen />;
  }

  const { theme } = userStore;

  return (
    <footer
      className={`${theme === 'light' ? 'bg-gray-100 text-gray-600' : 'bg-gray-800 text-gray-300'}`}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">MiBanco</h3>
            <p className="text-sm">Tu banco de confianza, siempre a tu lado.</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Enlaces Rápidos</h3>
            <ul className="text-sm">
              <li>
                <a className="hover:underline" href="/">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Contacto
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Seguridad
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Contacto</h3>
            <p className="text-sm">Teléfono: 123-456-7890</p>
            <p className="text-sm">Email: soporte@mibanco.com</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2025 MiBanco. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

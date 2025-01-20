import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Theme = 'light' | 'dark';
type Language = 'es' | 'en';

interface UserState {
  name: string;
  theme: Theme;
  language: Language;
}

interface UserStore extends UserState {
  setName: (name: string) => void;
  setTheme: (theme: Theme) => void;
  setLanguage: (language: Language) => void;
}

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      name: 'Usuario',
      theme: 'light',
      language: 'es',
      setName: (name) => {
        set({ name });
      },
      setTheme: (theme) => {
        set({ theme });
      },
      setLanguage: (language) => {
        set({ language });
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

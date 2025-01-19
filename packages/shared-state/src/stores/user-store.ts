import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface UserState {
  name: string;
  theme: Theme;
}

interface UserStore extends UserState {
  setName: (name: string) => void;
  setTheme: (theme: Theme) => void;
}

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      name: 'Usuario',
      theme: 'light',
      setName: (name) => {
        set({ name });
      },
      setTheme: (theme) => {
        set({ theme });
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

import { create } from 'zustand';

interface LocationState {
  path: string;
  setPath: (path: string) => void;
}

export const useLocationStore = create<LocationState>(set => ({
  path: '/',
  setPath: (path: string) => set({ path }),
}));

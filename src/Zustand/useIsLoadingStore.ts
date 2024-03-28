import { create } from 'zustand';

interface LoadingState {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const useIsLoadingStore = create<LoadingState>(set => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set(() => ({ isLoading })),
}));

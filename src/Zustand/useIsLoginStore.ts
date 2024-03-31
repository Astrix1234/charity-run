import { create } from 'zustand';

interface LoginState {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

export const useIsLoginStore = create<LoginState>(set => ({
  isLogin: true,
  setIsLogin: (isLogin: boolean) => set(() => ({ isLogin })),
}));

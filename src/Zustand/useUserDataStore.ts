import { UserData } from './api';
import { create } from 'zustand';

interface UserDataStore {
  userData: UserData | null;
  setUserData: (userData: UserData) => void;
}

export const useUserDataStore = create<UserDataStore>(set => ({
  userData: null,
  setUserData: (userData: UserData) => set(() => ({ userData })),
}));

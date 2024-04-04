import { raceParticipantUserData } from './api';
import { create } from 'zustand';

interface ParticipantUserDataStore {
  participantUserData: raceParticipantUserData[] | null;
  setParticipantUserData: (
    participantUserData: raceParticipantUserData[]
  ) => void;
}

export const useParticipantUserDataStore = create<ParticipantUserDataStore>(
  set => ({
    participantUserData: null,
    setParticipantUserData: (participantUserData: raceParticipantUserData[]) =>
      set(() => ({ participantUserData })),
  })
);

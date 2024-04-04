import { create } from 'zustand';
import Cookies from 'js-cookie';

interface CookieConsentState {
  showConsent: boolean;
  setShowConsent: (show: boolean) => void;
}

export const useCookieConsentStore = create<CookieConsentState>(set => ({
  showConsent: !Cookies.get('CookieConsent'),
  setShowConsent: show => set(() => ({ showConsent: show })),
}));

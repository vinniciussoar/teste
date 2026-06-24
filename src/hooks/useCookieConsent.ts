import { useEffect, useState } from 'react';

const COOKIE_KEY = 'sed_cookie_consent';

export function useCookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(COOKIE_KEY);
    } catch {
      /* localStorage indisponible */
    }
    if (stored) return;
    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const setConsent = (value: string) => {
    try {
      localStorage.setItem(COOKIE_KEY, value);
    } catch {
      /* localStorage indisponible */
    }
    setVisible(false);
  };

  return {
    visible,
    accept: () => setConsent('accepted'),
    decline: () => setConsent('essential'),
  };
}

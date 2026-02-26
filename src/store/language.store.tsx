'use client';

import { createContext, useContext, useMemo } from 'react';

interface LanguageStore {
  language: string;
}

const LanguageStoreContext = createContext<LanguageStore | null>(null);

export function LanguageStoreProvider({
  children,
  language,
}: {
  children: React.ReactNode;
  language: string;
}) {
  const value = useMemo(() => ({ language }), [language]);

  return (
    <LanguageStoreContext.Provider value={value}>
      {children}
    </LanguageStoreContext.Provider>
  );
}

export function useLanguageStore() {
  const context = useContext(LanguageStoreContext);
  if (!context) {
    throw new Error(
      'useLanguageStore must be used within a LanguageStoreProvider',
    );
  }

  return context;
}

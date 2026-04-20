"use client";

import React from "react";
import type { Locale } from "@/lib/i18n";
import { COPY } from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof COPY.ar;
};

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "taqnia_locale";

function applyLocaleToDocument(locale: Locale) {
  const html = document.documentElement;
  html.setAttribute("data-locale", locale);
  html.setAttribute("lang", locale === "ar" ? "ar" : "en");
  html.setAttribute("dir", locale === "ar" ? "rtl" : "ltr");
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(() => {
    if (typeof window === "undefined") return "ar";
    const saved = (localStorage.getItem(STORAGE_KEY) as Locale | null) ?? "ar";
    return saved === "en" ? "en" : "ar";
  });

  React.useEffect(() => {
    applyLocaleToDocument(locale);
  }, [locale]);

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = React.useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: COPY[locale],
    }),
    [locale, setLocale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}


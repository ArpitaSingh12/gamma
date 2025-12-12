import { createContext, useContext, useMemo, useState, useEffect, ReactNode } from "react";
import { translations, Language } from "@/locales/translations";

export interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";

    // 1) Try previously selected language from localStorage
    const stored = window.localStorage.getItem("app_language") as Language | null;
    if (stored && stored in translations) {
      return stored;
    }

    // 2) Try to infer from browser language (e.g. "sw-TZ" -> "sw")
    const browserLang = window.navigator.language?.slice(0, 2) as Language | undefined;
    if (browserLang && browserLang in translations) {
      return browserLang;
    }

    // 3) Default to English
    return "en";
  });

  // Persist language selection so it works consistently across pages and reloads
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("app_language", language);
    }
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: (key: string) => {
        const parts = key.split(".");

        // Try current language first
        let current: any = translations[language as keyof typeof translations];
        for (const part of parts) {
          if (current == null) break;
          current = current[part];
        }

        if (typeof current === "string") {
          return current;
        }

        // Fallback to English if key missing in selected language
        current = translations.en as any;
        for (const part of parts) {
          if (current == null) break;
          current = current[part];
        }

        if (typeof current === "string") {
          return current;
        }

        // As a last resort, return the key itself
        return key;
      },
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

export function useTranslation() {
  const { t } = useLanguage();
  return { t };
}

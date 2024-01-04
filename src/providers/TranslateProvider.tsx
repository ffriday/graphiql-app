import { createContext, useState } from "react";
import { LANGUAGES } from "../constants";
import {
  getCurrentLang,
  loadDefaultTranslation,
  loadLocale,
} from "../functions";

export type TranslationMap = Record<string, Record<string, string>>;

export type TranslationFunction = (key: string) => string;

export type Translations = Record<LANGUAGES, TranslationMap>;

export type TranslateContextType = {
  locale: TranslationMap;
  setLanguage: (language: LANGUAGES) => void;
};

const translations = await loadDefaultTranslation();

export const TranslateContext = createContext<TranslateContextType>({
  locale: {},
  setLanguage: () => {},
});

export const TranslateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [locale, setLocale] = useState(translations[getCurrentLang()]);

  const setLanguage = async (lang: LANGUAGES) => {
    if (Object.keys(translations[lang]).length) {
      setLocale(translations[lang]);
    } else {
      translations[lang] = await loadLocale(lang);
      setLocale(translations[lang]);
    }
  };

  return (
    <TranslateContext.Provider value={{ locale, setLanguage }}>
      {children}
    </TranslateContext.Provider>
  );
};

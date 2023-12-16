import { createContext, useContext, useState } from "react";
import { LANGUAGES, lang } from "./constants";

type TranslationFunction = (key: string) => string;

type TranslateContextType = {
  translate: TranslationFunction;
  setLanguage: (language: LANGUAGES) => void;
};

export const TranslateContext = createContext<TranslateContextType>({
  translate: (key: string) => key,
  setLanguage: () => {},
});

export const useTranslate = (): TranslationFunction => {
  const { translate } = useContext(TranslateContext);
  return translate;
};

export const TranslateContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState(LANGUAGES.EN);
  const translate: TranslationFunction = (key: string) => {
    return lang[language][key as keyof (typeof lang)[LANGUAGES]] || key;
  };

  return (
    <TranslateContext.Provider value={{ translate, setLanguage }}>
      {children}
    </TranslateContext.Provider>
  );
};

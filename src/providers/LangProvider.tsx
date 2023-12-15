import { createContext, useContext, useState } from "react";
import { LANGUAGES } from "./constants";

type LangContextType = {
  language: LANGUAGES;
  setLanguage: (language: LANGUAGES) => void;
};

export const LangContext = createContext<LangContextType>({
  language: LANGUAGES.EN,
  setLanguage: () => {},
});

export const useLangContext = () => useContext(LangContext);

export const LangContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState(LANGUAGES.EN);

  return (
    <LangContext.Provider value={{ language, setLanguage }}>
      {children}
    </LangContext.Provider>
  );
};

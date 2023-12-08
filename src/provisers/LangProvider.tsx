import { createContext, useContext, useState } from "react";
import { LANGUAGES } from "../constants/constants";

type AppContextType = {
  language: string;
  setLanguage: (language: string) => void;
};

export const AppContext = createContext<AppContextType>({
  language: LANGUAGES.EN,
  setLanguage: () => {},
});

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState(LANGUAGES.EN);

  return (
    <AppContext.Provider value={{ language, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

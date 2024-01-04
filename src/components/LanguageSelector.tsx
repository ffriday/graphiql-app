import { useContext, useState } from "react";
import { TranslateContext } from "../providers/TranslateProvider";
import { LANGUAGES, ParamKeys } from "../constants";

export const LanguageSelector = () => {
  const { setLanguage } = useContext(TranslateContext);
  const [selectorLanguage, setSelectorLanguage] = useState(LANGUAGES.EN);
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newLanguage = event.target.value as LANGUAGES;
    setLanguage(newLanguage);
    setSelectorLanguage(newLanguage);
    window.localStorage.setItem(ParamKeys.language, newLanguage);
  };

  return (
    <select
      className="lang-select"
      value={selectorLanguage}
      onChange={handleLanguageChange}
    >
      <option value={LANGUAGES.EN}>English</option>
      <option value={LANGUAGES.RU}>Русский</option>
    </select>
  );
};

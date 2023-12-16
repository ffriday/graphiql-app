import { useContext, useState } from "react";
import { LANGUAGES } from "../providers/constants";
import { TranslateContext } from "../providers/TranslateProvider";

export const LanguageSelector = () => {
  const { setLanguage } = useContext(TranslateContext);
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES.EN);
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newLanguage = event.target.value as LANGUAGES;
    setSelectedLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <select
      className="lang-select"
      value={selectedLanguage}
      onChange={handleLanguageChange}
    >
      <option value={LANGUAGES.EN}>English</option>
      <option value={LANGUAGES.RU}>Русский</option>
    </select>
  );
};

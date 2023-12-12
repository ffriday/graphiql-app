import { LANGUAGES } from "../providers/constants";
import { useAppContext } from "../providers/LangProvider";

export const LanguageSelector = () => {
  const { language, setLanguage } = useAppContext();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedLanguage = event.target.value as LANGUAGES;
    setLanguage(selectedLanguage);
  };

  return (
    <select
      className="lang-select"
      value={language}
      onChange={handleLanguageChange}
    >
      <option value={LANGUAGES.EN}>English</option>
      <option value={LANGUAGES.RU}>Русский</option>
    </select>
  );
};

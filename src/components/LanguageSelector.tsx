import { LANGUAGES } from "../constants/constants";
import { useAppContext } from "../provisers/LangProvider";

export const LanguageSelector = () => {
  const { language, setLanguage } = useAppContext();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedLanguage = event.target.value;
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

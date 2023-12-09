import { LANGUAGES, lang } from "../../constants/lang";
import { useAppContext } from "../../provisers/LangProvider";

export const ErrorPage = () => {
  const { language } = useAppContext();
  const { errorMessage } = lang[language as keyof typeof LANGUAGES];
  return <h1>{errorMessage}</h1>;
};

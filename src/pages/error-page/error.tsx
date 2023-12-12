import { LANGUAGES, lang } from "../../providers/constants";
import { useAppContext } from "../../providers/LangProvider";

export const ErrorPage = () => {
  const { language } = useAppContext();
  const { errorMessage } = lang[language as LANGUAGES];
  return <h1>{errorMessage}</h1>;
};

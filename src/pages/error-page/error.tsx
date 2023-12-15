import { LANGUAGES, lang } from "../../providers/constants";
import { useLangContext } from "../../providers/LangProvider";

export const ErrorPage = () => {
  const { language } = useLangContext();
  const { errorMessage } = lang[language as LANGUAGES];
  return <h1>{errorMessage}</h1>;
};

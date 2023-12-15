import { LANGUAGES, lang } from "../../providers/constants";
import { useLangContext } from "../../providers/LangProvider";

export const WelcomePage = () => {
  const { language } = useLangContext();
  const { welcomeMessage } = lang[language as LANGUAGES];
  return (
    <>
      <h1>{welcomeMessage}</h1>
    </>
  );
};

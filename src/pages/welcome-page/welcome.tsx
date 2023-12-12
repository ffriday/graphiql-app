import { LANGUAGES, lang } from "../../providers/constants";
import { useAppContext } from "../../providers/LangProvider";

export const WelcomePage = () => {
  const { language } = useAppContext();
  const { welcomeMessage } = lang[language as LANGUAGES];
  return (
    <>
      <h1>{welcomeMessage}</h1>
    </>
  );
};

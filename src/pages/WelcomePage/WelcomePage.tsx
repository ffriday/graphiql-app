import { LANGUAGES, lang } from "../../constants/lang";
import { useAppContext } from "../../providers/LangProvider";

export const WelcomePage = () => {
  const { language } = useAppContext();
  const { welcomeMessage } = lang[language as keyof typeof LANGUAGES];
  return (
    <>
      <h1>{welcomeMessage}</h1>
    </>
  );
};

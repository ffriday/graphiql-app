import { LANGUAGES, lang } from "../../providers/constants";
import { useLangContext } from "../../providers/LangProvider";

export const SignInPage = () => {
  const { language } = useLangContext();
  const { signIn } = lang[language as LANGUAGES];
  return (
    <>
      <h1>{signIn}</h1>
    </>
  );
};

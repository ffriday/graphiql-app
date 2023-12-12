import { LANGUAGES, lang } from "../../providers/constants";
import { useAppContext } from "../../providers/LangProvider";

export const SignInPage = () => {
  const { language } = useAppContext();
  const { signIn } = lang[language as LANGUAGES];
  return (
    <>
      <h1>{signIn}</h1>
    </>
  );
};

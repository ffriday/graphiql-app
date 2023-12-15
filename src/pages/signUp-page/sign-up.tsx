import { LANGUAGES, lang } from "../../providers/constants";
import { useLangContext } from "../../providers/LangProvider";

export const SignUpPage = () => {
  const { language } = useLangContext();
  const { signUp } = lang[language as LANGUAGES];
  return (
    <>
      <h1>{signUp}</h1>
    </>
  );
};

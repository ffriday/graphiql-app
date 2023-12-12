import { LANGUAGES, lang } from "../../providers/constants";
import { useAppContext } from "../../providers/LangProvider";

export const SignUpPage = () => {
  const { language } = useAppContext();
  const { signUp } = lang[language as LANGUAGES];
  return (
    <>
      <h1>{signUp}</h1>
    </>
  );
};

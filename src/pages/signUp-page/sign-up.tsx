import { LANGUAGES, lang } from "../../constants/lang";
import { useAppContext } from "../../provisers/LangProvider";

export const SignUpPage = () => {
  const { language } = useAppContext();
  const { signUp } = lang[language as keyof typeof LANGUAGES];
  return (
    <>
      <h1>{signUp}</h1>
    </>
  );
};

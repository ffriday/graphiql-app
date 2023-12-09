import { LANGUAGES, lang } from "../../constants/lang";
import { useAppContext } from "../../provisers/LangProvider";

export const SignInPage = () => {
  const { language } = useAppContext();
  const { signIn } = lang[language as keyof typeof LANGUAGES];
  return (
    <>
      <h1>{signIn}</h1>
    </>
  );
};

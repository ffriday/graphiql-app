import { useContext } from "react";
import { LANGUAGES, lang } from "../../constants/lang";
import { AuthContext } from "../../provisers/AuthProviders";
import { useAppContext } from "../../provisers/LangProvider";
import { SignInPage } from "../signIn-page/sign-in";

export const WelcomePage = () => {
  const { status, userId } = useContext(AuthContext);
  const { language } = useAppContext();
  const { welcomeMessage } = lang[language as keyof typeof LANGUAGES];
  return (
    <>
      {status === "authenticated" && userId ? (
        <h1>{welcomeMessage}</h1>
      ) : (
        <SignInPage />
      )}
    </>
  );
};

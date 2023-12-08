import { useAppContext } from "../../provisers/LangProvider";

export const SignInPage = () => {
  const { language } = useAppContext();
  const SignInTitle = language === "ru" ? "Вход" : "Sign in";
  return (
    <>
      <h1>{SignInTitle}</h1>
    </>
  );
};

import { useAppContext } from "../../provisers/LangProvider";

export const SignUpPage = () => {
  const { language } = useAppContext();
  const SignUpTitle = language === "ru" ? "Регистрация" : "Sign up";
  return (
    <>
      <h1>{SignUpTitle}</h1>
    </>
  );
};

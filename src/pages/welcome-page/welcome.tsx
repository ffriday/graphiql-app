import { useAppContext } from "../../provisers/LangProvider";

export const WelcomePage = () => {
  const { language } = useAppContext();
  const welcomeMessage =
    language === "ru" ? "Добро пожаловать в приложение" : "Welcome to the app";
  return (
    <>
      <h1>{welcomeMessage}</h1>
      <p>The Welcome page...</p>
    </>
  );
};

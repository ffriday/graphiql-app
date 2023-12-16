import { useTranslate } from "../../hooks/useTranslate";

export const WelcomePage = () => {
  const translate = useTranslate();
  const welcomeMessage = translate("welcomeMessage");
  return (
    <>
      <h1>{welcomeMessage}</h1>
    </>
  );
};

import { useTranslate } from "../../hooks/useTranslate";

export const ErrorPage = () => {
  const translate = useTranslate();
  const errorMessage = translate("errorMessage");
  return <h1>{errorMessage}</h1>;
};

import { LangPages } from "../../constants";
import { useTranslate } from "../../hooks";

export const ErrorPage = () => {
  const translate = useTranslate(LangPages.shared);
  return <h1>{translate("errorMessage")}</h1>;
};

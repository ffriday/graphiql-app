import { useAppContext } from "../../provisers/LangProvider";

export const ErrorPage = () => {
  const { language } = useAppContext();
  const ErrorMessage =
    language === "ru"
      ? "Ошибка 404. Такая страница не найдена"
      : "Error 404. Page not found";
  return <h1>{ErrorMessage}</h1>;
};

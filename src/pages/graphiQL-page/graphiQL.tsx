import { useAppContext } from "../../provisers/LangProvider";

export const GraphiQLPage = () => {
  const { language } = useAppContext();
  const GraphiQLMessage =
    language === "ru"
      ? "Здесь будет всё самое интересное"
      : "All the most interesting things will be here";
  return (
    <>
      <h1>GraphiQL</h1>
      <p>{GraphiQLMessage}</p>
    </>
  );
};

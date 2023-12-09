import { useAppContext } from "../../provisers/LangProvider";
import "./graphiQL.css";

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
      <div className="graphiQL-container">
        <aside className="settings"></aside>
        <main className="session">
          <div className="editor"></div>
          <div className="response"></div>
        </main>
      </div>
    </>
  );
};

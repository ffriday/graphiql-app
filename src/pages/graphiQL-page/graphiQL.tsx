import { Editor } from "../../components/editor/editor";
import { Settings } from "../../components/settings/settings";
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
        <Settings />
        <main className="session">
          <Editor />
          <div className="response"></div>
        </main>
      </div>
    </>
  );
};

import { useTranslate } from "../../providers/TranslateProvider";
import "./graphiQL.css";

export const GraphiQLPage = () => {
  const translate = useTranslate();
  const graphiQLMessage = translate("graphiQLMessage");
  return (
    <>
      <h1>GraphiQL</h1>
      <p>{graphiQLMessage}</p>
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

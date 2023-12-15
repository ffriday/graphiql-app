import { useLangContext } from "../../providers/LangProvider";
import { LANGUAGES, lang } from "../../providers/constants";
import "./graphiQL.css";

export const GraphiQLPage = () => {
  const { language } = useLangContext();
  const { graphiQLMessage } = lang[language as LANGUAGES];
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

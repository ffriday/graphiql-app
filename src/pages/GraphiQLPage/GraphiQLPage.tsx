import { LANGUAGES, lang } from "../../constants/lang";
import { useAppContext } from "../../providers/LangProvider";
import "./GraphiQLPage.css";

export const GraphiQLPage = () => {
  const { language } = useAppContext();
  const { graphiQLMessage } = lang[language as keyof typeof LANGUAGES];
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

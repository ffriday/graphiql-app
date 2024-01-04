import { useContext } from "react";
import { useAppContext } from "../../providers/LangProvider";
import { LANGUAGES, lang } from "../../constants/lang";
import { AuthContext } from "../../providers/AuthProviders";
import "./GraphiQLPage.css";
import { WelcomePage } from "../WelcomePage/WelcomePage";

export const GraphiQLPage = () => {
  const { language } = useAppContext();
  const { graphiQLMessage } = lang[language as keyof typeof LANGUAGES];
  const { userId } = useContext(AuthContext);

  return userId ? (
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
  ) : (
    <WelcomePage />
  );
};

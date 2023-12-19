import { useContext } from "react";
import { useAppContext } from "../../providers/LangProvider";
import { LANGUAGES, lang } from "../../constants/lang";
import { AuthContext } from "../../providers/AuthProviders";
import { APP_ROUTES } from "../../constants/constants";
import { SignInPage } from "../SignInPage/SignInPage";
import { useRedirect } from "../../hooks/useRedirect";
import "./GraphiQLPage.css";

export const GraphiQLPage = () => {
  const { language } = useAppContext();
  const { graphiQLMessage } = lang[language as keyof typeof LANGUAGES];
  const { userId } = useContext(AuthContext);

  useRedirect(`/${APP_ROUTES.SIGNIN}`, null);

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
    <SignInPage />
  );
};

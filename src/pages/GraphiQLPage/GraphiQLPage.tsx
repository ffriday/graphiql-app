import { useContext } from "react";
import { useAppContext } from "../../providers/LangProvider";
import { LANGUAGES, lang } from "../../constants/lang";
import "./GraphiQLPage.css";
import { AuthContext } from "../../providers/AuthProviders";
import { APP_ROUTES } from "../../constants/constants";
import { SignInPage } from "../SignInPage/SignInPage";
import { Editor } from "./Editor";
import { useLoadQuery, useRedirect } from "../../hooks";

export const GraphiQLPage = () => {
  const { language } = useAppContext();
  const { graphiQLMessage } = lang[language as keyof typeof LANGUAGES];
  const { userId } = useContext(AuthContext);

  useRedirect(`/${APP_ROUTES.SIGNIN}`, null);
  useLoadQuery(userId);

  return userId ? (
    <>
      <h1>GraphQL</h1>
      <p>{graphiQLMessage}</p>
      <div className="graphiQL-container">
        <main className="session">
          <Editor />
          <div className="response"></div>
        </main>
      </div>
    </>
  ) : (
    <SignInPage />
  );
};

import { useContext } from "react";
import { useAppContext } from "../../providers/LangProvider";
import { LANGUAGES, lang } from "../../constants/lang";
import { AuthContext } from "../../providers/AuthProviders";
import { APP_ROUTES } from "../../constants/constants";
import { SignInPage } from "../SignInPage/SignInPage";
import { Editor } from "./Editor";
import { useLoadQuery, useRedirect } from "../../hooks";
import CodeMirror from "@uiw/react-codemirror";
import styles from "./GraphiQLPage.module.scss";

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
      <div className={styles.graphQLcontainer}>
        <main className={styles.session}>
          <Editor />
          <CodeMirror
            className={styles.editor}
            value={"query"}
            height="100%"
            editable={false}
            onChange={() => null}
          />
        </main>
      </div>
    </>
  ) : (
    <SignInPage />
  );
};

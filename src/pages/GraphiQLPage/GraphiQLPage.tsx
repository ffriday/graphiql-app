import { useContext } from "react";
import "./GraphiQLPage.css";
import { AuthContext } from "../../providers/AuthProviders";
import { LangPages } from "../../constants/constants";
import { SignInPage } from "../SignInPage/SignInPage";
import { Editor } from "./Editor";
import { useLoadQuery, useTranslate } from "../../hooks";

export const GraphiQLPage = () => {
  const translate = useTranslate(LangPages.graphql);
  const { userId } = useContext(AuthContext);

  useLoadQuery(userId);
  useLoadQuery(userId);

  return userId ? (
    <>
      <h1>GraphQL</h1>
      <p>{translate("graphQLMessage")}</p>
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

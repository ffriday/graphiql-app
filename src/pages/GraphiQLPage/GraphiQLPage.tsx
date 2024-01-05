import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import {
  APP_ROUTES,
  INITIAL_ENDPOINT,
  LangPages,
  ParamKeys,
} from "../../constants/constants";
import { SignInPage } from "../SignInPage/SignInPage";
import { Editor } from "./Editor";
import { useLoadQuery, useRedirect, useTranslate } from "../../hooks";
import CodeMirror from "@uiw/react-codemirror";
import { Input, InputLabel } from "@mui/material";
import styles from "./GraphiQLPage.module.scss";
import { useSearchParams } from "react-router-dom";

export const GraphiQLPage = () => {
  const translate = useTranslate(LangPages.graphql);
  const { userId } = useContext(AuthContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const endpoint = searchParams.get(ParamKeys.endpoint) ?? INITIAL_ENDPOINT;

  useRedirect(`/${APP_ROUTES.SIGNIN}`, null);
  useLoadQuery(userId);

  const onChange = (value: string, key: ParamKeys) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
    window.localStorage.setItem(key, value);
  };

  return userId ? (
    <>
      <h1>GraphQL</h1>
      <div className={styles.endpoint}>
        <InputLabel>{translate("endpoint")}</InputLabel>
        <Input
          className={styles.endpointInput}
          value={endpoint}
          onChange={(event) => onChange(event.target.value, ParamKeys.endpoint)}
        />
      </div>
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

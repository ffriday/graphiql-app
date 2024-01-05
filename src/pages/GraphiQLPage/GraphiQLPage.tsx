import { Suspense, useContext } from "react";
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
import { useQuery } from "@tanstack/react-query";
import { prettify } from "../../functions";

export const GraphiQLPage = () => {
  const translate = useTranslate(LangPages.graphql);
  const { userId } = useContext(AuthContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const endpoint = searchParams.get(ParamKeys.endpoint) ?? INITIAL_ENDPOINT;

  useRedirect(`/${APP_ROUTES.SIGNIN}`, null);
  useLoadQuery(userId);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isFetching, isError, data, error, refetch } = useQuery({
    queryKey: ["graphql"],
    queryFn: async () => {
      const query = searchParams.get(ParamKeys.query) ?? "";
      const headers = searchParams.get(ParamKeys.headers);
      const headersObject = headers ? JSON.parse(headers) : {};
      const variables = searchParams.get(ParamKeys.variables) ?? "";
      const endpoint = searchParams.get(ParamKeys.endpoint) ?? "";

      const data = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...JSON.parse(headersObject),
        },
        body: JSON.stringify({ query, variables }),
        credentials: "same-origin",
      });
      return await data.json();
    },
    enabled: false,
  });

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
          <Editor refetch={refetch} />
          <div className={styles.container}>
            <Suspense
              fallback={
                <div className={styles.loader}>{translate("loading")}</div>
              }
            >
              <CodeMirror
                className={styles.editor}
                value={prettify(data ? JSON.stringify(data) : "")}
                height="100%"
                editable={false}
              />
              {isFetching ? (
                <div className={styles.loader}>{translate("loading")}</div>
              ) : (
                <></>
              )}
            </Suspense>
          </div>
        </main>
      </div>
    </>
  ) : (
    <SignInPage />
  );
};

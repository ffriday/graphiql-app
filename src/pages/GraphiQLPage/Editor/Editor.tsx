import CodeMirror from "@uiw/react-codemirror";
import { Toolbar } from "../Toolbar";
import { useSearchParams } from "react-router-dom";
import { LangPages, ParamKeys } from "../../../constants";
import styles from "./Editor.module.scss";
import { Button } from "@mui/material";
import { useState } from "react";
import { useTranslate } from "../../../hooks";

export function Editor(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showVariables, setShowVariables] = useState(true);
  const translate = useTranslate(LangPages.graphql);

  const query = searchParams.get(ParamKeys.query) ?? "";
  const headers = searchParams.get(ParamKeys.headers) ?? "";
  const variables = searchParams.get(ParamKeys.variables) ?? "";

  const onChange = (value: string, key: ParamKeys) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
    window.localStorage.setItem(key, value);
  };

  return (
    <>
      <Toolbar />
      <div className={styles.container}>
        <CodeMirror
          className={styles.editor}
          value={query}
          height="100%"
          onChange={(value) => onChange(value, ParamKeys.query)}
        />
        <div className={styles.editorbuttons}>
          <Button
            type="button"
            size="small"
            disabled={showVariables}
            onClick={() => setShowVariables(true)}
          >
            {translate("variables")}
          </Button>
          <Button
            type="button"
            size="small"
            disabled={!showVariables}
            onClick={() => setShowVariables(false)}
          >
            {translate("headers")}
          </Button>
        </div>
        <CodeMirror
          className={styles.subeditor}
          value={showVariables ? variables : headers}
          height="100%"
          onChange={(value) =>
            onChange(
              value,
              showVariables ? ParamKeys.variables : ParamKeys.headers,
            )
          }
        />
      </div>
    </>
  );
}

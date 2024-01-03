import CodeMirror from "@uiw/react-codemirror";
import { Toolbar } from "../Toolbar";
import { useGetQuery } from "../../../hooks";
import { useSearchParams } from "react-router-dom";
import { ParamKeys } from "../../../constants";

export function Editor(): JSX.Element {
  const [, setSearchParams] = useSearchParams();
  const { query } = useGetQuery();

  const onChange = (value: string) => {
    setSearchParams({ [ParamKeys.query]: value });
    window.localStorage.setItem(ParamKeys.query, value);
  };

  return (
    <>
      <Toolbar />
      <CodeMirror
        className="editor"
        value={query}
        width="100%"
        height="100%"
        onChange={onChange}
      />
    </>
  );
}

import CodeMirror from "@uiw/react-codemirror";
import { Toolbar } from "../Toolbar";
import { useSearchParams } from "react-router-dom";
import { ParamKeys } from "../../../constants";

export function Editor(): JSX.Element {
  const [getSearchParams, setSearchParams] = useSearchParams();
  const query = getSearchParams.get(ParamKeys.query) ?? "";

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

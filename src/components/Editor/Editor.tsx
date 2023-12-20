import CodeMirror from "@uiw/react-codemirror";
import { useQueryContext } from "../../providers/queryProvider";
import { parseCode } from "../../functions/prettify";
import { useCallback } from "react";

export const Editor = () => {
  const {
    data: {
      query: { value },
    },
    updateData,
  } = useQueryContext();

  const onChange = useCallback(
    (value: string) => {
      const { isValid } = parseCode(value);
      updateData({ query: { value, isValid } });
    },
    [updateData],
  );

  return (
    <CodeMirror
      className="editor"
      value={value}
      width="100%"
      height="100%"
      onChange={onChange}
    />
  );
};

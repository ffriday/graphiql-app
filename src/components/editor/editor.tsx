import CodeMirror from "@uiw/react-codemirror";
import { useQueryContext } from "../../providers/queryProvider";
import { parseCode } from "./prettify";
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
      const val = value ?? "";
      const { isValid } = parseCode(val);
      updateData({ query: { value: val, isValid } });
    },
    [updateData],
  );

  return (
    <CodeMirror value={value} width="100%" height="100%" onChange={onChange} />
  );
};

import { useQueryContext } from "../../providers/queryProvider";
import { parseCode } from "./prettify";

export const Editor = () => {
  const {
    data: {
      query: { value },
    },
    updateData,
  } = useQueryContext();

  const changeQuery = ({
    currentTarget: { textContent },
  }: React.FormEvent<HTMLPreElement>) => {
    const value = textContent ?? "";
    const { isValid } = parseCode(value);
    updateData({ query: { value, isValid } });
  };

  return (
    <pre className="editor" contentEditable="true" onInput={changeQuery}>
      {value}
    </pre>
  );
};

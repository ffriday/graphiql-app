import { useQueryContext } from "../../providers/queryProvider";
import { prettify } from "../editor/prettify";

export const Settings = () => {
  const {
    data: {
      query: { value, isValid },
    },
    updateData,
  } = useQueryContext();

  const prettifyCode = () => {
    updateData({ query: { value: prettify(value), isValid } });
  };

  return (
    <aside className="settings">
      <button onClick={prettifyCode} disabled={!isValid}>
        Prettify
      </button>
    </aside>
  );
};

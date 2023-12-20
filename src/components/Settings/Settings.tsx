import { useQueryContext } from "../../providers/queryProvider";
import { prettify } from "../editor/prettify";
import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServices";
import styles from "./Settings.module.scss";

export const Settings = () => {
  return (
    <aside className="settings">
      <PrettifyButton />
    </aside>
  );
};

const PrettifyButton = () => {
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
    <button
      onClick={prettifyCode}
      disabled={!isValid}
      className={styles.button}
    >
      <CleaningServicesOutlinedIcon style={{ color: "white" }} />
    </button>
  );
};

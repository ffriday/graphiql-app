import { useQueryContext } from "../../providers/queryProvider";
import { prettify } from "../editor/prettify";
import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServices";
import styles from "./Settings.module.scss";
import { IconButton } from "@mui/material";

export const Settings = () => {
  return (
    <aside className={styles.settings}>
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
    <IconButton
      onClick={prettifyCode}
      disabled={!isValid}
      aria-aria-label="Prettify"
    >
      <CleaningServicesOutlinedIcon />
    </IconButton>
  );
};

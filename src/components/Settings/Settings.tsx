import { useQueryContext } from "../../providers/queryProvider/queryContext";
import { prettify } from "../../functions";
import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServices";
import { styles } from "./";
import { IconButton } from "@mui/material";

export function Settings(): JSX.Element {
  return (
    <aside className={styles.settings}>
      <PrettifyButton />
    </aside>
  );
}

function PrettifyButton(): JSX.Element {
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
      aria-label="Prettify"
    >
      <CleaningServicesOutlinedIcon />
    </IconButton>
  );
}

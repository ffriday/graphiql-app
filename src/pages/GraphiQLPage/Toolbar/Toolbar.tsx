import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServices";
import PlayCircleOutline from "@mui/icons-material/PlayCircleOutline";
import { styles } from ".";
import { IconButton } from "@mui/material";
import { useGetQuery } from "../../../hooks";
import { parseCode, prettify } from "../../../functions";
import { useSearchParams } from "react-router-dom";
import { ParamKeys } from "../../../constants";

export function Toolbar(): JSX.Element {
  return (
    <aside className={styles.Toolbar}>
      <SubmitButton />
      <PrettifyButton />
    </aside>
  );
}

function PrettifyButton(): JSX.Element {
  const [, setSearchParams] = useSearchParams();
  const { query } = useGetQuery();

  const prettifyCode = () => {
    setSearchParams({ [ParamKeys.query]: prettify(query) });
  };

  return (
    <IconButton
      onClick={prettifyCode}
      disabled={!parseCode(query).isValid}
      aria-label="Prettify"
    >
      <CleaningServicesOutlinedIcon />
    </IconButton>
  );
}

function SubmitButton(): JSX.Element {
  return (
    <IconButton onClick={() => null} aria-label="Submit">
      <PlayCircleOutline />
    </IconButton>
  );
}

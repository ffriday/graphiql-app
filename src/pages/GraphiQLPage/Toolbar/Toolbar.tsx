import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServices";
import PlayCircleOutline from "@mui/icons-material/PlayCircleOutline";
import DeleteForeverOutlined from "@mui/icons-material/DeleteForeverOutlined";
import { styles } from ".";
import { IconButton } from "@mui/material";
import { useGetQuery } from "../../../hooks";
import { checkCode, cleanCode, prettify } from "../../../functions";
import { useSearchParams } from "react-router-dom";
import { INITIAL_QUERY, ParamKeys } from "../../../constants";

export function Toolbar(): JSX.Element {
  const [, setSearchParams] = useSearchParams();
  const { query } = useGetQuery();

  const prettifyCode = () => {
    setSearchParams({ [ParamKeys.query]: prettify(query) });
  };

  const clear = () => {
    setSearchParams({
      [ParamKeys.query]: INITIAL_QUERY,
      [ParamKeys.variables]: "",
      [ParamKeys.headers]: "",
    });
  };

  return (
    <aside className={styles.Toolbar}>
      <IconButton onClick={() => null} aria-label="Submit">
        <PlayCircleOutline />
      </IconButton>

      <IconButton
        onClick={prettifyCode}
        disabled={!checkCode(cleanCode(query))}
        aria-label="Prettify"
      >
        <CleaningServicesOutlinedIcon />
      </IconButton>
      <IconButton onClick={clear} aria-label="Clear">
        <DeleteForeverOutlined />
      </IconButton>
    </aside>
  );
}

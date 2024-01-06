import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServices";
import PlayCircleOutline from "@mui/icons-material/PlayCircleOutline";
import DeleteForeverOutlined from "@mui/icons-material/DeleteForeverOutlined";
import Description from "@mui/icons-material/Description";
import { styles } from ".";
import { IconButton } from "@mui/material";
import { useTranslate } from "../../../hooks";
import { checkCode, cleanCode, prettify } from "../../../functions";
import { useSearchParams } from "react-router-dom";
import { INITIAL_QUERY, LangPages, ParamKeys } from "../../../constants";
import { useState } from "react";
import Schema from "../../../components/Schema/Schema";

export function Toolbar(): JSX.Element {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get(ParamKeys.query) ?? "";
  const translate = useTranslate(LangPages.toolbar);
  const [showSchema, setShowSchema] = useState(false);

  const prettifyCode = () => {
    searchParams.set(ParamKeys.query, prettify(query));
    setSearchParams(searchParams);
  };

  const clear = () => {
    setSearchParams({
      [ParamKeys.query]: INITIAL_QUERY,
      [ParamKeys.variables]: "",
      [ParamKeys.headers]: "",
    });
  };

  const handleShowSchema = () => {
    setShowSchema((prevShowSchema) => !prevShowSchema);
  };

  return (
    <aside className={styles.Toolbar}>
      <div className={styles.ToolbarButtons}>
        <IconButton onClick={handleShowSchema} aria-label={translate("docs")}>
          <Description />
        </IconButton>

        <IconButton onClick={() => null} aria-label={translate("submit")}>
          <PlayCircleOutline />
        </IconButton>

        <IconButton
          onClick={prettifyCode}
          disabled={!checkCode(cleanCode(query))}
          aria-label={translate("prettify")}
        >
          <CleaningServicesOutlinedIcon />
        </IconButton>
        <IconButton onClick={clear} aria-label={translate("clear")}>
          <DeleteForeverOutlined />
        </IconButton>
      </div>
      {showSchema && <Schema />}
    </aside>
  );
}

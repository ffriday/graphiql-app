import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { NavLink } from "react-router-dom";
import { APP_ROUTES, LangPages } from "../../constants/constants";
import { useTranslate } from "../../hooks";
import styles from "./welcome-page.module.scss";
import Button from "@mui/material/Button";

export const WelcomePage = () => {
  const { userId } = useContext(AuthContext);
  const translate = useTranslate(LangPages.welcome);

  return (
    <>
      <div>
        <nav className="navigation">
          {!userId ? (
            <h1 className={styles.heading}>{translate("welcomeMessage")}</h1>
          ) : (
            <>
              <div className={styles["welcome-container"]}>
                <h1 className={styles.heading}>
                  {translate("incentivePhrase")}
                </h1>
                <NavLink className={styles.link} to={APP_ROUTES.GRAPHIQL}>
                  {" "}
                  <Button variant="contained" color="success">
                    GraphQl
                  </Button>
                </NavLink>{" "}
              </div>
            </>
          )}
        </nav>
      </div>
    </>
  );
};

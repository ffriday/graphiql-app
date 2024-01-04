import { useContext } from "react";
import { LANGUAGES, lang } from "../../constants/lang";
import { useAppContext } from "../../providers/LangProvider";
import { AuthContext } from "../../providers/AuthProviders";
import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../../constants/constants";
import Button from "@mui/material/Button";
import styles from "./welcome-page.module.scss";

export const WelcomePage = () => {
  const { language } = useAppContext();
  const { welcomeMessage, incentivePhrase } =
    lang[language as keyof typeof LANGUAGES];
  const { userId } = useContext(AuthContext);

  return (
    <>
      <div>
        <nav className="navigation">
          {!userId ? (
            <h1 className={styles.heading}>{welcomeMessage}</h1>
          ) : (
            <>
              <div className={styles["welcome-container"]}>
                <h1 className={styles.heading}>{incentivePhrase}</h1>
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

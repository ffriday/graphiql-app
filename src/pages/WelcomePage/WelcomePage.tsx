import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { NavLink } from "react-router-dom";
import { APP_ROUTES, LangPages } from "../../constants/constants";
import { useTranslate } from "../../hooks";

export const WelcomePage = () => {
  const { userId } = useContext(AuthContext);
  const translate = useTranslate(LangPages.welcome);

  return (
    <>
      <h1>{translate("welcomeMessage")}</h1>
      <div>
        <nav className="navigation">
          {!userId ? (
            <>
              <NavLink to={APP_ROUTES.SIGNIN}>{translate("signIn")}</NavLink>
              <NavLink to={APP_ROUTES.SIGNUP}>{translate("signUp")}</NavLink>
            </>
          ) : (
            <NavLink to={APP_ROUTES.GRAPHIQL}>GraphQl</NavLink>
          )}
        </nav>
      </div>
    </>
  );
};

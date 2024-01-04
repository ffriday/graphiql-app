import { NavLink } from "react-router-dom";
import { APP_ROUTES, LangPages } from "../../constants/constants";
import { LanguageSelector } from "../LanguageSelector";
import "./Header.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useAuth } from "../../auth/useAuth";
import MessageSnackbar from "../MessageSnaсkbar/MessageSnackbar";
import { useTranslate } from "../../hooks";

export const Header = () => {
  const { userId } = useContext(AuthContext);
  const { handleLogOut } = useAuth();
  const [isSignOut, setIsSignOut] = useState(false);
  const translate = useTranslate(LangPages.header);
  const translateSystem = useTranslate(LangPages.shared);

  const handlerClickLogOut = () => {
    if (userId) {
      handleLogOut();
      setIsSignOut(true);
    }
  };

  return (
    <header className="header">
      <nav className="navigation">
        <NavLink to={APP_ROUTES.WELCOME}>{translate("welcome")}</NavLink>
        {!userId && (
          <>
            <NavLink to={APP_ROUTES.SIGNIN}>{translate("signIn")}</NavLink>
            <NavLink to={APP_ROUTES.SIGNUP}>{translate("signUp")}</NavLink>
          </>
        )}
        <NavLink to={APP_ROUTES.GRAPHIQL}>GraphQl</NavLink>
      </nav>
      {userId && (
        <button onClick={handlerClickLogOut}>{translate("signOut")}</button>
      )}
      <LanguageSelector />
      <MessageSnackbar
        isOpen={isSignOut}
        message={translateSystem("logOutSuccess")}
        severity="success"
      />
    </header>
  );
};

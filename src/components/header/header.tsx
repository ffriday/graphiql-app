import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../../constants/constants";
import { LanguageSelector } from "../LanguageSelector";
import { useAppContext } from "../../provisers/LangProvider";
import "./header.css";
import { LANGUAGES, lang } from "../../constants/lang";
import { useContext, useState } from "react";
import { AuthContext } from "../../provisers/AuthProviders";
import { useAuth } from "../../auth/useAuth";
import MessageSnackbar from "../MessageSnakbar/MessageSnackbar";

export const Header = () => {
  const { session } = useContext(AuthContext);
  const { userId } = session;
  const { handleLogOut } = useAuth();
  const { language } = useAppContext();
  const { signOut, signIn, signUp, welcome, logOutSuccess } =
    lang[language as keyof typeof LANGUAGES];
  const [isSignOut, setIsSignOut] = useState(false);

  const handlerClickLogOut = () => {
    if (userId) {
      handleLogOut();
      setIsSignOut(true);
    }
  };

  return (
    <div className="header">
      <nav className="navigation">
        <NavLink to={APP_ROUTES.WELCOME}>{welcome}</NavLink>
        {!userId && (
          <>
            <NavLink to={APP_ROUTES.SIGNIN}>{signIn}</NavLink>
            <NavLink to={APP_ROUTES.SIGNUP}>{signUp}</NavLink>
          </>
        )}
        <NavLink to={APP_ROUTES.GRAPHIQL}>GraphQl</NavLink>
      </nav>
      {userId && <button onClick={handlerClickLogOut}>{signOut}</button>}
      <LanguageSelector />
      <MessageSnackbar
        isOpen={isSignOut}
        message={logOutSuccess}
        severity="success"
      />
    </div>
  );
};

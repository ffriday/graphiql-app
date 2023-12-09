import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../../constants/constants";
import { LanguageSelector } from "../LanguageSelector";
import { useAppContext } from "../../provisers/LangProvider";
import "./header.css";
import { LANGUAGES, lang } from "../../constants/lang";
import { useContext } from "react";
import { AuthContext } from "../../provisers/AuthProviders";

export const Header = () => {
  const { language } = useAppContext();
  const { signOut, signIn, signUp, welcome } =
    lang[language as keyof typeof LANGUAGES];
  const { handleLogOut } = useContext(AuthContext);

  return (
    <div className="header">
      <nav className="navigation">
        <NavLink to={APP_ROUTES.WELCOME}>{welcome}</NavLink>
        <NavLink to={APP_ROUTES.SIGNIN}>{signIn}</NavLink>
        <NavLink to={APP_ROUTES.SIGNUP}>{signUp}</NavLink>
        <NavLink to={APP_ROUTES.GRAPHIQL}>GraphQl</NavLink>
      </nav>
      <button onClick={handleLogOut}>{signOut}</button>
      <LanguageSelector />
    </div>
  );
};

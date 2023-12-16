import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../../constants/constants";
import { LanguageSelector } from "../LanguageSelector";
import "./Header.css";
import { useTranslate } from "../../hooks/useTranslate";

export const Header = () => {
  const translate = useTranslate();
  const welcome = translate("welcome");
  const signIn = translate("signIn");
  const signUp = translate("signUp");
  const signOut = translate("signOut");

  return (
    <div className="header">
      <nav className="navigation">
        <NavLink to={APP_ROUTES.WELCOME}>{welcome}</NavLink>
        <NavLink to={APP_ROUTES.SIGNIN}>{signIn}</NavLink>
        <NavLink to={APP_ROUTES.SIGNUP}>{signUp}</NavLink>
        <NavLink to={APP_ROUTES.GRAPHIQL}>GraphQl</NavLink>
      </nav>
      <button>{signOut}</button>
      <LanguageSelector />
    </div>
  );
};

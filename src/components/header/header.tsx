import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../../constants/constants";
import { LanguageSelector } from "../LanguageSelector";
import { useLangContext } from "../../providers/LangProvider";
import "./Header.css";
import { LANGUAGES, lang } from "../../providers/constants";

export const Header = () => {
  const { language } = useLangContext();
  const { signOut, signIn, signUp, welcome } =
    lang[language as keyof typeof LANGUAGES];

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

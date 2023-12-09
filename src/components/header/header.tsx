import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../../constants/constants";
import { LanguageSelector } from "../LanguageSelector";
import { useAppContext } from "../../provisers/LangProvider";
import "./header.css";

export const Header = () => {
  const { language } = useAppContext();
  const signOut = language === "ru" ? "Выйти" : "Sign out";
  const welcome = language === "ru" ? "Стартовая страница" : "Welcome";
  const signIn = language === "ru" ? "Вход" : "Sign in";
  const signUp = language === "ru" ? "Регистрация" : "Sign up";

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

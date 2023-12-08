import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../constants/constants";
import { LanguageSelector } from "./LanguageSelector";

export const Header = () => {
  return (
    <>
      <nav>
        <NavLink to={APP_ROUTES.WELCOME}>Welcome</NavLink>
        <NavLink to={APP_ROUTES.SIGNIN}>Sign in</NavLink>
        <NavLink to={APP_ROUTES.SIGNUP}>Sign up</NavLink>
        <NavLink to={APP_ROUTES.GRAPHIQL}>GraphQl</NavLink>
      </nav>
      <LanguageSelector />
    </>
  );
};

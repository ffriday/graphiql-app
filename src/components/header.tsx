import { NavLink } from "react-router-dom";
export const APP_ROUTES = {
  WELCOME: "/",
  SIGNIN: "sign_in",
  SIGNUP: "sign_up",
  GRAPHIQL: "graphiQL",
};
export const Header = () => {
  return (
    <nav>
      <NavLink to={APP_ROUTES.WELCOME}>Welcome</NavLink>
      <NavLink to={APP_ROUTES.SIGNIN}>Sign in</NavLink>
      <NavLink to={APP_ROUTES.SIGNUP}>Sign up</NavLink>
      <NavLink to={APP_ROUTES.GRAPHIQL}>GraphQl</NavLink>
    </nav>
  );
};

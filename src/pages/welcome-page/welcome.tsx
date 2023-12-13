import { useContext } from "react";
import { LANGUAGES, lang } from "../../constants/lang";
import { useAppContext } from "../../provisers/LangProvider";
import { AuthContext } from "../../provisers/AuthProviders";
import { NavLink } from "react-router-dom";
import { APP_ROUTES, Status } from "../../constants/constants";

export const WelcomePage = () => {
  const { language } = useAppContext();
  const { welcomeMessage } = lang[language as keyof typeof LANGUAGES];
  const { session } = useContext(AuthContext);
  const { signIn, signUp } = lang[language as keyof typeof LANGUAGES];
  const { status, userId } = session;
  return (
    <>
      <h1>{welcomeMessage}</h1>
      <p>
        {" "}
        <nav className="navigation">
          {status === Status.NoAuthenticated && !userId ? (
            <>
              <NavLink to={APP_ROUTES.SIGNIN}>{signIn}</NavLink>
              <NavLink to={APP_ROUTES.SIGNUP}>{signUp}</NavLink>
            </>
          ) : (
            <NavLink to={APP_ROUTES.GRAPHIQL}>GraphQl</NavLink>
          )}
        </nav>
      </p>
    </>
  );
};

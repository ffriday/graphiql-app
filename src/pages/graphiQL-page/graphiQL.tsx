import { useContext } from "react";
import { useAppContext } from "../../provisers/LangProvider";
import "./graphiQL.css";
import { AuthContext } from "../../provisers/AuthProviders";
import { APP_ROUTES } from "../../constants/constants";
import { SignInPage } from "../signIn-page/sign-in";
import { useRedirect } from "../../auth/useRedirect";

export const GraphiQLPage = () => {
  const { language } = useAppContext();
  const { session } = useContext(AuthContext);
  const { userId } = session;
  const GraphiQLMessage =
    language === "ru"
      ? "Здесь будет всё самое интересное"
      : "All the most interesting things will be here";

  useRedirect(`/${APP_ROUTES.SIGNIN}`, null);

  return userId ? (
    <>
      <h1>GraphiQL</h1>
      <p>{GraphiQLMessage}</p>
      <div className="graphiQL-container">
        <aside className="settings"></aside>
        <main className="session">
          <div className="editor"></div>
          <div className="response"></div>
        </main>
      </div>
    </>
  ) : (
    <SignInPage />
  );
};

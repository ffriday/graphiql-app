import { useContext } from "react";
import { Editor } from "../../components/editor/editor";
import { Settings } from "../../components/settings/settings";
import { useAppContext } from "../../provisers/LangProvider";
import "./graphiQL.css";
import { AuthContext } from "../../provisers/AuthProviders";
import { APP_ROUTES } from "../../constants/constants";
import { SignInPage } from "../signIn-page/sign-in";
import { useRedirect } from "../../hooks/useRedirect";

export const GraphiQLPage = () => {
  const { language } = useAppContext();
  const { userId } = useContext(AuthContext);
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
        <Settings />
        <main className="session">
          <Editor />
          <div className="response"></div>
        </main>
      </div>
    </>
  ) : (
    <SignInPage />
  );
};

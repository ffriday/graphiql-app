import { useContext, useEffect } from "react";
import { useAppContext } from "../../provisers/LangProvider";
import "./graphiQL.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provisers/AuthProviders";
import { APP_ROUTES } from "../../constants/constants";
import { SignInPage } from "../signIn-page/sign-in";

export const GraphiQLPage = () => {
  const navigate = useNavigate();
  const { language } = useAppContext();
  const { session } = useContext(AuthContext);
  const { status, userId } = session;
  const GraphiQLMessage =
    language === "ru"
      ? "Здесь будет всё самое интересное"
      : "All the most interesting things will be here";
  useEffect(() => {
    if (status === "no-authenticated" && !userId) {
      navigate(`/${APP_ROUTES.SIGNIN}`);
    }
  }, [status, navigate, userId]);
  return status === "authenticated" && userId ? (
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

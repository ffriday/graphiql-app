import { Route, Routes } from "react-router-dom";
import { SignUpPage } from "../pages/signUp-page/sign-up";
import { ErrorPage } from "../pages/error-page/error";
import { GraphiQLPage } from "../pages/graphiQL-page/graphiQL";
import { SignInPage } from "../pages/signIn-page/sign-in";
import { WelcomePage } from "../pages/welcome-page/welcome";
import { APP_ROUTES } from "../constants/constants";

const AppRouter = () => (
  <Routes>
    <Route path={APP_ROUTES.SIGNIN} element={<SignInPage />} />
    <Route path={APP_ROUTES.SIGNUP} element={<SignUpPage />} />
    <Route path={APP_ROUTES.GRAPHIQL} element={<GraphiQLPage />} />
    <Route path="/" element={<WelcomePage />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default AppRouter;

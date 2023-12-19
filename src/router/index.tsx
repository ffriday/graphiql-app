import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { SignUpPage } from "../pages/signUp-page/sign-up";
import { ErrorPage } from "../pages/error-page/error";
import { SignInPage } from "../pages/signIn-page/sign-in";
import { WelcomePage } from "../pages/welcome-page/welcome";
import { APP_ROUTES } from "../constants/constants";
import { RootLayout } from "../layouts/root-layout";
import { GraphiQLPage } from "../pages/graphiQL-page/graphiQL";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route
        path={APP_ROUTES.SIGNIN}
        element={<SignInPage />}
        errorElement={<SignInPage />}
      />
      <Route
        path={APP_ROUTES.SIGNUP}
        element={<SignUpPage />}
        errorElement={<SignUpPage />}
      />
      <Route
        path={APP_ROUTES.GRAPHIQL}
        element={<GraphiQLPage />}
        errorElement={<GraphiQLPage />}
      />
      <Route
        path={APP_ROUTES.WELCOME}
        element={<WelcomePage />}
        errorElement={<WelcomePage />}
      />
      <Route path="/*" element={<ErrorPage />} errorElement={<WelcomePage />} />
    </Route>,
  ),
);

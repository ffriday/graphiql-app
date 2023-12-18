import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { SignUpPage } from "../pages/SignUp-page/Sign-up";
import { ErrorPage } from "../pages/Error-page/Error";
import { SignInPage } from "../pages/SignIn-page/Sign-in";
import { WelcomePage } from "../pages/Welcome-page/Welcome";
import { APP_ROUTES } from "../components/Footer/constants";
import { RootLayout } from "../layouts/Root-layout";
import { GraphiQLPage } from "../pages/GraphiQL-page/GraphiQL";

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

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { APP_ROUTES } from "../constants/constants";
import { RootLayout } from "../layouts/RootLayout";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { GraphiQLPage } from "../pages/GraphiQLPage/GraphiQLPage";
import { WelcomePage } from "../pages/WelcomePage/WelcomePage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
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

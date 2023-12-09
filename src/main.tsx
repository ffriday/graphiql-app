import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { AppContextProvider } from "./provisers/LangProvider";
import { router } from "./router";
import { AuthProvider } from "./provisers/AuthProviders";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </AuthProvider>
  </React.StrictMode>,
);

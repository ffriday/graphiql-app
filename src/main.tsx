import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { AppContextProvider } from "./provisers/LangProvider";
import { router } from "./router";
import { QueryProvider } from "./providers/queryProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppContextProvider>
      <QueryProvider>
        <RouterProvider router={router} />
      </QueryProvider>
    </AppContextProvider>
  </React.StrictMode>,
);

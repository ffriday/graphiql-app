import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { TranslateContextProvider } from "./providers/TranslateProvider";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TranslateContextProvider>
      <RouterProvider router={router} />
    </TranslateContextProvider>
  </React.StrictMode>,
);

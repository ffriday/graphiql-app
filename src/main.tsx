import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { LangContextProvider } from "./providers/LangProvider";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LangContextProvider>
      <RouterProvider router={router} />
    </LangContextProvider>
  </React.StrictMode>,
);

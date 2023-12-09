import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./provisers/LangProvider";
import { RootLayout } from "./layouts/root-layout";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <RootLayout />
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

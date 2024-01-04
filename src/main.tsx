import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { AppContextProvider } from "./providers/LangProvider";
import { router } from "./router";
import { AuthProvider } from "./providers/AuthProviders";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TranslateProvider } from "./providers/TranslateProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppContextProvider>
          <TranslateProvider>
            <RouterProvider router={router} />
          </TranslateProvider>
        </AppContextProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

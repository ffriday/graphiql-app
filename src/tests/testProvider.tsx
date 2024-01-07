import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider, TranslateProvider } from "../providers";
import { RouterProvider } from "react-router-dom";
import { router } from "../router";

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

export const RenderWithProvider = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TranslateProvider>
          <RouterProvider router={router} />
        </TranslateProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

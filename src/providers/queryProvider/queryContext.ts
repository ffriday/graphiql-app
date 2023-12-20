import { TQueryData, initialEndpoint, initialQuery } from "./";
import { createContext, useContext } from "react";

type TQueryContext = {
  data: TQueryData;
  updateData: (query: Partial<TQueryData>) => void;
};

export const initialQueryContext: TQueryData = {
  endpoint: initialEndpoint,
  query: { value: initialQuery, isValid: true },
  variables: "",
  headers: "",
};

export const QueryContext = createContext<TQueryContext>({
  data: initialQueryContext,
  updateData: () => {},
});

export const useQueryContext = () => useContext(QueryContext);

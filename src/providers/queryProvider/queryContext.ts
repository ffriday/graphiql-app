import { createContext, useContext } from "react";
import { parseCode } from "../../functions";
import { TQueryData, initialEndpoint, initialQuery } from "./";

type TQueryContext = {
  data: TQueryData;
  updateData: (query: Partial<TQueryData>) => void;
};

export const initialQueryContext: TQueryData = {
  endpoint: initialEndpoint,
  query: { value: initialQuery, isValid: parseCode(initialQuery).isValid },
  variables: "",
  headers: "",
};

export const QueryContext = createContext<TQueryContext>({
  data: initialQueryContext,
  updateData: () => {},
});

export const useQueryContext = () => useContext(QueryContext);

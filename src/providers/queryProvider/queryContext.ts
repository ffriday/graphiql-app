import { createContext, useContext } from "react";
import { parseCode } from "../../functions";
import { QueryData, initialEndpoint, InitialQuery } from "./";

type QueryContext = {
  data: QueryData;
  updateData: (query: Partial<QueryData>) => void;
};

export const initialQueryContext: QueryData = {
  endpoint: initialEndpoint,
  query: { value: InitialQuery, isValid: parseCode(InitialQuery).isValid },
  variables: "",
  headers: "",
};

export const QueryContext = createContext<QueryContext>({
  data: initialQueryContext,
  updateData: () => {},
});

export const useQueryContext = () => useContext(QueryContext);

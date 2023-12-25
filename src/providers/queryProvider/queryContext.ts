import { createContext, useContext } from "react";
import { parseCode } from "../../functions";
import { QueryData, INITIAL_QUERY, INITIAL_ENDPOINT } from "./";

type QueryContext = {
  data: QueryData;
  updateData: (query: Partial<QueryData>) => void;
};

export const initialQueryContext: QueryData = {
  endpoint: INITIAL_ENDPOINT,
  query: { value: INITIAL_QUERY, isValid: parseCode(INITIAL_ENDPOINT).isValid },
  variables: "",
  headers: "",
};

export const QueryContext = createContext<QueryContext>({
  data: initialQueryContext,
  updateData: () => {},
});

export const useQueryContext = () => useContext(QueryContext);

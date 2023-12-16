import { createContext, useContext, useState } from "react";
import { initialQueryContext } from "../components/editor/initialQuery";

export type TQuery = {
  value: string;
  isValid: boolean;
};

export type TQueryData = {
  endpoint: string;
  query: TQuery;
  variables: string;
  headers: string;
};

type TQueryContext = {
  data: TQueryData;
  updateData: (query: Partial<TQueryData>) => void;
};

const QueryContext = createContext<TQueryContext>({
  data: initialQueryContext,
  updateData: () => {},
});

export const useQueryContext = () => useContext(QueryContext);

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<TQueryData>(initialQueryContext);

  const updateData = (updatedQueryPart: Partial<TQueryData>) => {
    setData({ ...data, ...updatedQueryPart });
  };

  return (
    <QueryContext.Provider value={{ data, updateData }}>
      {children}
    </QueryContext.Provider>
  );
};

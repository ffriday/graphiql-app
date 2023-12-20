import { useState } from "react";
import { QueryContext, TQueryData, initialQueryContext } from "./";

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

import { useState } from "react";
import { QueryContext, QueryData, initialQueryContext } from "./";

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<QueryData>(initialQueryContext);

  const updateData = (updatedQueryPart: Partial<QueryData>) => {
    setData({ ...data, ...updatedQueryPart });
  };

  return (
    <QueryContext.Provider value={{ data, updateData }}>
      {children}
    </QueryContext.Provider>
  );
};

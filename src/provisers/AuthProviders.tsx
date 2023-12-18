import { ReactNode, createContext, useState } from "react";

export type AuthContextType = {
  userId: string | null;
  setUserId: (value: string | null) => void;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const initialState = null;
  const [userId, setUserId] = useState<string | null>(initialState);

  return (
    <AuthContext.Provider
      value={{
        userId,
        setUserId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

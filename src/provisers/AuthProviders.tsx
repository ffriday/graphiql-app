import { ReactNode, createContext, useState } from "react";
import { AuthState } from "../auth/types";

export interface IAuthContext {
  userId: AuthState;
  setUserId: (value: AuthState) => void;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const initialState: AuthState = null;
  const [userId, setUserId] = useState<AuthState>(initialState);

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

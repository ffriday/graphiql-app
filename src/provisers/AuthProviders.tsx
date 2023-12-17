import { ReactNode, createContext, useState } from "react";
import { AuthState } from "../constants/types";

export interface IAuthContext {
  session: AuthState;
  setSession: (value: AuthState) => void;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const initialState: AuthState = {
    userId: null,
  };
  const [session, setSession] = useState(initialState);

  return (
    <AuthContext.Provider
      value={{
        session,
        setSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

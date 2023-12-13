import { createContext, useState } from "react";

export interface IAuthContext {
  session: AuthState;
  setSession: (value: AuthState) => void;
}

export const AuthContext = createContext({} as IAuthContext);

interface IElement {
  children: JSX.Element | JSX.Element[];
}

type AuthState = {
  userId: string | null;
  status: "no-authenticated" | "authenticated" | "checking";
};

export const AuthProvider = ({ children }: IElement) => {
  const initialState: AuthState = {
    userId: null,
    status: "no-authenticated",
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

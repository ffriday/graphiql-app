import { createContext, useEffect, useState } from "react";
import {
  loginWithCredentials,
  logoutFirebase,
  onAuthStateHasChanged,
  signUpWithCredentials,
  singInWithGoogle,
} from "../auth/service";

export interface IAuthContext {
  userId: string | null;
  status: "checking" | "authenticated" | "no-authenticated";
  handleLoginWithGoogle: (successMessage: string) => Promise<void>;
  handleLoginWithCredentials: (
    password: string,
    email: string,
    successMessage: string,
  ) => Promise<void>;
  handleRegisterWithCredentials: (
    password: string,
    email: string,
    successMessage: string,
  ) => Promise<void>;
  handleLogOut: () => Promise<void>;
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

  useEffect(() => {
    onAuthStateHasChanged(setSession);
  }, []);

  const handleLogOut = async () => {
    logoutFirebase();
    setSession({ userId: null, status: "no-authenticated" });
  };

  const validateAuth = (userId: string | undefined) => {
    if (userId) return setSession({ userId, status: "authenticated" });
    handleLogOut();
  };

  const checking = () =>
    setSession((prev) => ({ ...prev, status: "checking" }));

  const handleLoginWithGoogle = async (successMessage: string) => {
    checking();
    const userId = await singInWithGoogle(successMessage);
    validateAuth(userId);
  };

  const handleLoginWithCredentials = async (
    password: string,
    email: string,
    successMessage: string,
  ) => {
    checking();
    const userId = await loginWithCredentials({
      email,
      password,
      successMessage,
    });
    validateAuth(userId);
  };

  const handleRegisterWithCredentials = async (
    password: string,
    email: string,
    successMessage: string,
  ) => {
    checking();
    const userId = await signUpWithCredentials({
      email,
      password,
      successMessage,
    });
    validateAuth(userId);
  };

  return (
    <AuthContext.Provider
      value={{
        ...session,
        handleLoginWithGoogle,
        handleLoginWithCredentials,
        handleRegisterWithCredentials,
        handleLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

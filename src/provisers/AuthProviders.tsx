import { createContext, useState } from "react";
// import {
//   loginWithCredentials,
//   logoutFirebase,
//   signUpWithCredentials,
//   singInWithGoogle,
// } from "../auth/service";
// import { onAuthStateChanged } from "firebase/auth";
// import { FirebaseAuth } from "../auth/config";

export interface IAuthContext {
  // userId: string | null;
  // status: "checking" | "authenticated" | "no-authenticated";
  // handleLoginWithGoogle: (successMessage: string) => Promise<void>;
  // handleLoginWithCredentials: (
  //   password: string,
  //   email: string,
  //   successMessage: string,
  // ) => Promise<void>;
  // handleRegisterWithCredentials: (
  //   password: string,
  //   email: string,
  //   successMessage: string,
  // ) => Promise<void>;
  // handleLogOut: () => Promise<void>;
  session: AuthState;
  setSession: (value: AuthState) => void;
}
// type setSessionType = (value: {
//   userId: string | null;
//   status: "no-authenticated" | "authenticated" | "checking";
// }) => void;

//  const onAuthStateHasChanged = (setSession: setSessionType) => {
//   onAuthStateChanged(FirebaseAuth, (user) => {
//     if (!user) return setSession({ status: "no-authenticated", userId: null });
//     setSession({ status: "authenticated", userId: user!.uid });
//   });
// };
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

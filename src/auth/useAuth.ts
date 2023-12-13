import { useMutation } from "@tanstack/react-query";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { FirebaseAuth } from "./config";
import { AuthContext } from "../provisers/AuthProviders";
import { useContext, useState } from "react";
import { Status } from "../constants/constants";

const googleAuth = new GoogleAuthProvider();

export function useAuth() {
  const { setSession } = useContext(AuthContext);
  const [error, setError] = useState<Error | null>(null);

  const clearAlert = () => {
    setError(null);
  };

  const googleLoginMutation = useMutation({
    mutationFn: () => signInWithPopup(FirebaseAuth, googleAuth),
    onSuccess: (data) => {
      if (data) {
        setSession({ userId: data.user.uid, status: Status.Authenticated });
      }
    },
    onError: (error) => {
      setError(error);
    },
  });

  const signInWithCredentialsMutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signInWithEmailAndPassword(FirebaseAuth, email, password),
    onSuccess: (data) => {
      if (data) {
        setSession({ userId: data.user.uid, status: Status.Authenticated });
      }
    },
    onError: (error) => {
      setError(error);
    },
  });

  const signUpWithCredentialsMutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      createUserWithEmailAndPassword(FirebaseAuth, email, password),
    onSuccess: (data) => {
      if (data) {
        setSession({ userId: data.user.uid, status: Status.Authenticated });
      }
    },
    onError: (error) => {
      setError(error);
    },
  });

  const logOutMutation = useMutation({
    mutationFn: () => FirebaseAuth.signOut(),
    onSuccess: () => {
      setSession({ userId: null, status: Status.NoAuthenticated });
    },
    onError: (error) => {
      setError(error);
    },
  });

  return {
    googleLogin: googleLoginMutation.mutate,
    handleSignIn: signInWithCredentialsMutation.mutate,
    handleSignUp: signUpWithCredentialsMutation.mutate,
    handleLogOut: logOutMutation.mutate,
    error,
    clearAlert,
  };
}

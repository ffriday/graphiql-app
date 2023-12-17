import { useMutation } from "@tanstack/react-query";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { FirebaseAuth } from "./config";
import { AuthContext } from "../provisers/AuthProviders";
import { useContext } from "react";
import { AuthResource } from "../constants/types";

const googleAuth = new GoogleAuthProvider();

export function useAuth(): AuthResource {
  const { setSession } = useContext(AuthContext);

  const googleLoginMutation = useMutation({
    mutationFn: () => signInWithPopup(FirebaseAuth, googleAuth),
    onSuccess: (data) => {
      if (data) {
        setSession({ userId: data.user.uid });
      }
    },
  });

  const signInWithCredentialsMutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signInWithEmailAndPassword(FirebaseAuth, email, password),
    onSuccess: (data) => {
      if (data) {
        setSession({ userId: data.user.uid });
      }
    },
  });

  const signUpWithCredentialsMutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      createUserWithEmailAndPassword(FirebaseAuth, email, password),
    onSuccess: (data) => {
      if (data) {
        setSession({ userId: data.user.uid });
      }
    },
  });

  const logOutMutation = useMutation({
    mutationFn: () => FirebaseAuth.signOut(),
    onSuccess: () => {
      setSession({ userId: null });
    },
  });

  return {
    googleLogin: googleLoginMutation.mutate,
    handleSignIn: signInWithCredentialsMutation.mutate,
    handleSignUp: signUpWithCredentialsMutation.mutate,
    handleLogOut: logOutMutation.mutate,
    isError:
      googleLoginMutation.isError ||
      signInWithCredentialsMutation.isError ||
      signUpWithCredentialsMutation.isError ||
      logOutMutation.isError,
    error:
      googleLoginMutation.error ||
      signInWithCredentialsMutation.error ||
      signUpWithCredentialsMutation.error ||
      logOutMutation.error,
  };
}

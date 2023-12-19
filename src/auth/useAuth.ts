import { useMutation } from "@tanstack/react-query";
import {
  GoogleAuthProvider,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { FirebaseAuth } from "./config";
import { AuthContext } from "../providers/AuthProviders";
import { useContext } from "react";
import { AuthResource, Credentials } from "./types";

const googleAuth = new GoogleAuthProvider();

export function useAuth(): AuthResource {
  const { setUserId } = useContext(AuthContext);

  const onSuccessCallback = (data: UserCredential) => {
    if (data) {
      setUserId(data.user.uid);
    }
  };

  const googleLoginMutation = useMutation({
    mutationFn: () => signInWithPopup(FirebaseAuth, googleAuth),
    onSuccess: onSuccessCallback,
  });

  const signInWithCredentialsMutation = useMutation({
    mutationFn: ({ email, password }: Credentials) =>
      signInWithEmailAndPassword(FirebaseAuth, email, password),
    onSuccess: onSuccessCallback,
  });

  const signUpWithCredentialsMutation = useMutation({
    mutationFn: ({ email, password }: Credentials) =>
      createUserWithEmailAndPassword(FirebaseAuth, email, password),
    onSuccess: onSuccessCallback,
  });

  const logOutMutation = useMutation({
    mutationFn: () => FirebaseAuth.signOut(),
    onSuccess: () => {
      setUserId(null);
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

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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const googleAuth = new GoogleAuthProvider();

export function useAuth() {
  const { setSession } = useContext(AuthContext);

  const googleLoginMutation = useMutation({
    mutationFn: () => signInWithPopup(FirebaseAuth, googleAuth),
    onSuccess: (data) => {
      if (data) {
        setSession({ userId: data.user.uid, status: "authenticated" });
        toast.success("Sign in with Google success");
      }
    },
    onError: (error) => {
      toast.error((error as Error).message);
    },
  });
  const signInWithCredentialsMutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signInWithEmailAndPassword(FirebaseAuth, email, password),
    onSuccess: (data) => {
      if (data) {
        setSession({ userId: data.user.uid, status: "authenticated" });
        toast.success("Sign in success");
      }
    },
    onError: (error) => {
      toast.error((error as Error).message);
    },
  });
  const signUpWithCredentialsMutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      createUserWithEmailAndPassword(FirebaseAuth, email, password),
    onSuccess: (data) => {
      if (data) {
        setSession({ userId: data.user.uid, status: "authenticated" });
        toast.success("Sign up success");
      }
    },
    onError: (error) => {
      toast.error((error as Error).message);
    },
  });
  const logOutMutation = useMutation({
    mutationFn: () => FirebaseAuth.signOut(),
    onSuccess: () => {
      setSession({ userId: null, status: "no-authenticated" });
    },
    onError: (error) => {
      toast.error((error as Error).message);
    },
  });

  return {
    googleLogin: googleLoginMutation.mutate,
    handleSignIn: signInWithCredentialsMutation.mutate,
    handleSignUp: signUpWithCredentialsMutation.mutate,
    handleLogOut: logOutMutation.mutate,
  };
}

import { useMutation } from "@tanstack/react-query";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { FirebaseAuth } from "./config";
import { AuthContext } from "../provisers/AuthProviders";
import { useContext } from "react";

const googleAuth = new GoogleAuthProvider();

export function useAuth() {
  const {setSession} = useContext(AuthContext);
  
  const googleLoginMutation = useMutation({
    mutationFn: () => signInWithPopup(FirebaseAuth, googleAuth),
    onSuccess: (data) => {
      if (data) {
        setSession({userId: data.user.uid, status: "authenticated"})
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  // here we can have all the other auth methods

  return {
    googleLogin: googleLoginMutation.mutate
  }
}

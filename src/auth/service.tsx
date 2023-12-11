import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { FirebaseAuth } from "./config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const googleAuth = new GoogleAuthProvider();

export const singInWithGoogle = async (successMessage: string) => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleAuth);
    const { uid } = result.user;
    toast.success(successMessage);
    return uid;
  } catch (error) {
    toast.error((error as Error).message);
  }
};

interface IRegistration {
  email: string;
  password: string;
  successMessage?: string;
}

export const signUpWithCredentials = async ({
  email,
  password,
  successMessage,
}: IRegistration) => {
  try {
    const result = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password,
    );
    toast.success(successMessage);
    return result.user.uid;
  } catch (error) {
    toast.error((error as Error).message);
  }
};

export const loginWithCredentials = async ({
  email,
  password,
  successMessage,
}: IRegistration) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password,
    );
    toast.success(successMessage);
    return resp.user.uid;
  } catch (error) {
    toast.error((error as Error).message);
  }
};

type setSessionType = (value: {
  userId: string | null;
  status: "no-authenticated" | "authenticated" | "checking";
}) => void;

export const onAuthStateHasChanged = (setSession: setSessionType) => {
  onAuthStateChanged(FirebaseAuth, (user) => {
    if (!user) return setSession({ status: "no-authenticated", userId: null });
    setSession({ status: "authenticated", userId: user!.uid });
  });
};

export const logoutFirebase = async () => await FirebaseAuth.signOut();

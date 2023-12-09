import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleAuth = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleAuth);
    const { uid } = result.user;
    return uid;
  } catch (error) {
    alert((error as Error).message);
  }
};

interface PropsRegister {
  email: string;
  password: string;
}

export const signInWithCredentials = async ({
  email,
  password,
}: PropsRegister) => {
  try {
    const result = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password,
    );
    return result.user.uid;
  } catch (e) {
    alert((e as Error).message);
  }
};

export const loginWithCredentials = async ({
  email,
  password,
}: PropsRegister) => {
  try {
    const resp = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password,
    );
    return resp.user.uid;
  } catch (e) {
    alert((e as Error).message);
  }
};

type SetSessionType = (value: {
  userId: string | null;
  status: "no-authenticated" | "authenticated" | "checking";
}) => void;

export const onAuthStateHasChanged = (setSession: SetSessionType) => {
  onAuthStateChanged(FirebaseAuth, (user) => {
    if (!user) return setSession({ status: "no-authenticated", userId: null });

    setSession({ status: "authenticated", userId: user!.uid });
  });
};

export const logoutFirebase = async () => await FirebaseAuth.signOut();

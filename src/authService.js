import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Register
export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// Login
export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// Logout
export const signOutUser = () => {
  return signOut(auth);
};

// Auth state listener
export const onAuthState = (callback) => {
  return onAuthStateChanged(auth, callback);
};

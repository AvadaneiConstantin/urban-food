//  Handles Firebase authentication (sign-in and sign-out) with callback support
//  Uses Firebase auth methods: signInWithEmailAndPassword and signOut
//  Calls successCallback on success, errorCallback with message on failure

import { auth } from "./firebase-config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

type Callback = () => void;
type ErrorCallback = (message: string) => void;

// Sign in a user with email and password
export async function sign_in(
  email: string,
  password: string,
  successCallback: Callback,
  errorCallback: ErrorCallback
) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    successCallback();
  } catch (err) {
    errorCallback(err instanceof Error ? err.message : "Login error"); // call on failure
  }
}

// Sign out the current user
export async function sign_out(
  successCallback: Callback,
  errorCallback: ErrorCallback
) {
  try {
    await signOut(auth);
    successCallback(); // call on successful logout
  } catch (err) {
    errorCallback(err instanceof Error ? err.message : "Logout error"); // call on failure
  }
}

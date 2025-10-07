// Custom hook for AuthContext
// - useAuthContext provides access to currentUser and loading
// - Ensures it is called inside AuthProvider

import { useContext } from "react";
import AuthContext from "./AuthContext";

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuthContext must be used inside <AuthProvider>");
  }
  return ctx;
}

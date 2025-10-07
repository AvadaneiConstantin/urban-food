// Auth Context - Provides currentUser and loading state globally
// - Uses Firebase Auth onAuthStateChanged to track login status
// - Stores user email in localStorage when logged in
// - Wraps app with AuthProvider to give access via context

import React, { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../packages/firebase/firebase-config";
interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
}
const AuthContext = React.createContext<AuthContextType | undefined>(undefined);
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      if (user) {
        localStorage.setItem("user_email", user.email || "-");
      } else {
        localStorage.removeItem("user_email");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, loading }}>
      {" "}
      {children}{" "}
    </AuthContext.Provider>
  );
}
export default AuthContext;

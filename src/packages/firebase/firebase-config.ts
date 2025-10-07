//  Initializes Firebase app with project configuration
//  Sets up Firebase Authentication service
//  Configures GoogleAuthProvider for Google sign-in

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSBbLZJRqe-TxBVcvx5Bq_dq-bqLjdXL8",
  authDomain: "urban-food-f94a2.firebaseapp.com",
  projectId: "urban-food-f94a2",
  storageBucket: "urban-food-f94a2.appspot.com",
  messagingSenderId: "296211076531",
  appId: "1:296211076531:web:0f58c64f7e9a5def6227c6",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth service
export const auth = getAuth(app);

// Google authentication provider
export const providerGoogle = new GoogleAuthProvider();

export default app;

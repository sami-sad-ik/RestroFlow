import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { createContext } from "react";
import auth from "../Firebase/Firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setuser(currentUser);
        console.log("user -->", currentUser);
      }
    });
    return () => unsubscribe();
  }, []);

  const authInfo = { user, createUser, signInUser, updateUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

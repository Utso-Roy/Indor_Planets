import React, { useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { AuthContext } from "../../Context/AuthContext";
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const provider = new GoogleAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email, {
      url: "http://localhost:5173/login",
    });
  };

  const authInfo = {
    user,
    loading,
    signUp,
    setUser,
    logOut,
    signIn,
    googleLogin,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

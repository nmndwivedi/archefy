import { useState, useEffect } from "react";
import {
  signInWithGoogleFirebase,
  app,
  auth,
  signOutFirebase,
} from "../firebase";

const useFirebase = () => {
  const [user, setUser] = useState(null);

  //user, login popup, automatic load, logout

  useEffect(() => {
    //Load user from local storage
    const localUser = localStorage.getItem("user");
    if (localUser) {
      setUser(JSON.parse(localUser));
    }
  }, []);

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithGoogleFirebase();
      const user = {
        id: res.user.uid,
        name: res.user.displayName,
        email: res.user.email,
        photo: res.user.photoURL,
        access: res.user.accessToken,
        refresh: res.user.refreshToken,
      };
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    try {
      await signOutFirebase();
      localStorage.removeItem("user");
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    user,
    signInWithGoogle,
    signOut,
  };
};

export default useFirebase;

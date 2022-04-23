// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlxNlf1m-cFIEtgp_5xGK_gpZmbNsnIAA",
  authDomain: "archefy-2cc7a.firebaseapp.com",
  projectId: "archefy-2cc7a",
  storageBucket: "archefy-2cc7a.appspot.com",
  messagingSenderId: "540703921338",
  appId: "1:540703921338:web:0865c9dbb6bb0e9c8fde83",
  measurementId: "G-H9S24CY010",
};

let analytics;
let provider;
// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (typeof window !== "undefined") {
  analytics = getAnalytics(app);

  provider = new GoogleAuthProvider();
}

export const auth = getAuth(app);
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};

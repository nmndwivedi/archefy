// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
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
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogleFirebase = async () => {
  return signInWithPopup(auth, provider);
};

export const signOutFirebase = async () => {
  return signOut(auth);
};

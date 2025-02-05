// ==========================================
// ==========================================
// i will add this to .env later
// ==========================================
// ==========================================

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtGsAybrJnp_8jQSnhfbk2nVS9isRyH_o",
  authDomain: "upliance-auth.firebaseapp.com",
  projectId: "upliance-auth",
  storageBucket: "upliance-auth.firebasestorage.app",
  messagingSenderId: "284250656907",
  appId: "1:284250656907:web:dcabcbb05268050ff0048e",
  measurementId: "G-JVT28QKQ78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
// ==========================================
// ==========================================
// i will add this to .env later
// ==========================================
// ==========================================

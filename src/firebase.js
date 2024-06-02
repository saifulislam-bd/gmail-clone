// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6sVd0RCn-ijly0tiI2e4a1c-ZBvQSnAc",
  authDomain: "clone-fb778.firebaseapp.com",
  projectId: "clone-fb778",
  storageBucket: "clone-fb778.appspot.com",
  messagingSenderId: "280739678929",
  appId: "1:280739678929:web:b10b20c1635feb08cd53f0",
  measurementId: "G-TME9TK8ET7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();

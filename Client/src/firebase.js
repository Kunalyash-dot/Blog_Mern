// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // apiKey:"AIzaSyDcCoFKU_DeLzmpNLURlRpSVfdzyZ0OSKc",
  authDomain: "mern-blog-e9164.firebaseapp.com",
  projectId: "mern-blog-e9164",
  storageBucket: "mern-blog-e9164.appspot.com",
  messagingSenderId: "367679906104",
  appId: "1:367679906104:web:7ed6f8276b17eaf40c61cd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
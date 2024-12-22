// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a5067.firebaseapp.com",
  projectId: "mern-estate-a5067",
  storageBucket: "mern-estate-a5067.firebasestorage.app",
  messagingSenderId: "371344005201",
  appId: "1:371344005201:web:2f7cd29b6cf5df87b40070"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
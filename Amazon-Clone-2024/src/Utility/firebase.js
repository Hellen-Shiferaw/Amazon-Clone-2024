// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; // For Firestore
import { getAuth } from 'firebase/auth'; // For Authentication



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrYVdx_d4qQ4g-ZUDS1WZuGUWFiIr5xWA",
  authDomain: "clone-2024-5512b.firebaseapp.com",
  projectId: "clone-2024-5512b",
  storageBucket: "clone-2024-5512b.appspot.com",
  messagingSenderId: "589320680075",
  appId: "1:589320680075:web:98e3957ef54b4dea8e9a8e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);








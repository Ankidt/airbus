// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQgB6UW_QZ5piry8SnJv8gUXn0s4En_aU",
  authDomain: "clone-cf89c.firebaseapp.com",
  projectId: "clone-cf89c",
  storageBucket: "clone-cf89c.appspot.com",
  messagingSenderId: "1032132451035",
  appId: "1:1032132451035:web:75d34be0bcbcc03416cafe",
  measurementId: "G-W94Y5DCDB9"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const db = getFirestore(app);


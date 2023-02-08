// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyD3-eXLsEfSGxtRrOShj0bN3Uz2BeoUHek",
  authDomain: "airbus-7c626.firebaseapp.com",
  projectId: "airbus-7c626",
  storageBucket: "airbus-7c626.appspot.com",
  messagingSenderId: "213388193245",
  appId: "1:213388193245:web:90551a5a638c5dd0451a34",
  measurementId: "G-8EBVJZZTBZ"
});

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const db = getFirestore(app);


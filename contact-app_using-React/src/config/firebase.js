// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
const apikey=import.meta.env.VITE_API_KEY;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:apikey,
  authDomain: "contact-app-69c98.firebaseapp.com",
  projectId: "contact-app-69c98",
  storageBucket: "contact-app-69c98.firebasestorage.app",
  messagingSenderId: "182150475558",
  appId: "1:182150475558:web:058d4365f8b78de3f09be7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
export{db}
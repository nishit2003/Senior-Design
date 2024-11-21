// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "furrfect-4ad0e.firebaseapp.com",
  projectId: "furrfect-4ad0e",
  storageBucket: "furrfect-4ad0e.appspot.com",
  messagingSenderId: "659034186250",
  appId: "1:659034186250:web:bbb78838c83c627965f5f3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);



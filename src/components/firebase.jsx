// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth"; 
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFRLZkINnzNSuiwTUlAw79EX89S1Acokw",
  authDomain: "good-creator-4145f.firebaseapp.com",
  projectId: "good-creator-4145f",
  storageBucket: "good-creator-4145f.appspot.com",
  messagingSenderId: "1086152775736",
  appId: "1:1086152775736:web:b552bd8b26f1f9a4526ecd",
  measurementId: "G-8Z66L5ZN0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

// Export the instances to be used in your app
export const auth = getAuth();
export const googleProvider = provider;
export const db = getFirestore(app);
export default app;








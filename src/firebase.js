// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm9lBaY6ZsVS4HQWeJxDBaCuGodix4pfk",
  authDomain: "brightlearn-db56d.firebaseapp.com",
  projectId: "brightlearn-db56d",
  storageBucket: "brightlearn-db56d.appspot.com", // Fix storageBucket domain
  messagingSenderId: "921691796224",
  appId: "1:921691796224:web:0721a4750e438b286f39e5",
  measurementId: "G-PK2GJXNL29",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export only `app`
export default app;
export const auth = getAuth(app);  // Firebase Authentication
export const db = getFirestore(app); // Firestore Database

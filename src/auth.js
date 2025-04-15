import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import app from "./firebase"; // Ensure firebase is correctly imported
import { toast } from "sonner";

// Initialize Firebase Auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(); // Correctly initialize Google provider

// Google Sign-In Function
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user; // User details
  } catch (error) {
    console.error("Google sign-in error:", error.message);
    return null;
  }
};

// Email/Password Sign-Up
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing up:", error.message);
    return null;
  }
};

// Email/Password Sign-In
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in:", error.message);
    return null;
  }
};

// Logout
export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out:", error.message);
  }
};

//reset password
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    toast.message("Password reset email sent. Check your inbox.");
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      toast.error("No account found with that email.");
    } else {
      console.error("Error resetting password:", error);
      toast.error("Error resetting password");
    }
  }
};

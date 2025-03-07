import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCCGAFwp_lHP6f-LVGRiBL0Dc_MP523_-Y",
    authDomain: "auth-61940.firebaseapp.com",
    projectId: "auth-61940",
    storageBucket: "auth-61940.firebasestorage.app",
    messagingSenderId: "661465894225",
    appId: "1:661465894225:web:b9d437420ba5d941ce1770",
    measurementId: "G-K7CKZ09XHC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
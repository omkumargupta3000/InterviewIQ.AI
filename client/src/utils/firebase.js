import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "interviewiq-d641f.firebaseapp.com",
    projectId: "interviewiq-d641f",
    storageBucket: "interviewiq-d641f.firebasestorage.app",
    messagingSenderId: "730818093693",
    appId: "1:730818093693:web:207f1fed843fc3a32f8714"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
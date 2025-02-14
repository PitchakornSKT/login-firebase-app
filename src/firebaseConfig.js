import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDYmueMM1glSlzcKW1S8H4AXfmVdblFXX0",
    authDomain: "login-firebase-app-af28a.firebaseapp.com",
    projectId: "login-firebase-app-af28a",
    storageBucket: "login-firebase-app-af28a.firebasestorage.app",
    messagingSenderId: "755109143383",
    appId: "1:755109143383:web:0c69fd4fa7d35bed49d412",
    measurementId: "G-N0ENWC6ERW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

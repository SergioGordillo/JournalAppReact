import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjM-bPxXIm84PADT7WVDZI8ugxB-QqmA4",
    authDomain: "journalappreact-8f10c.firebaseapp.com",
    projectId: "journalappreact-8f10c",
    storageBucket: "journalappreact-8f10c.appspot.com",
    messagingSenderId: "875839750205",
    appId: "1:875839750205:web:87f6e85b0611d62be12a54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider
}

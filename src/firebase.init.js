// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD86yUS_DlgvqeDNt_oEHStYIHpL7SxQm8",
  authDomain: "email-pass-auth-50239.firebaseapp.com",
  projectId: "email-pass-auth-50239",
  storageBucket: "email-pass-auth-50239.appspot.com",
  messagingSenderId: "896861184924",
  appId: "1:896861184924:web:586f01d2c58b0041ec5e59",
  measurementId: "G-L6TD5VLJM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

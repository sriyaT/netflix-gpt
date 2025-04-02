// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAofY1DaG-YhKHp-JHesF24NzdqePkcP0w",
  authDomain: "netflixgpt-f74d7.firebaseapp.com",
  projectId: "netflixgpt-f74d7",
  storageBucket: "netflixgpt-f74d7.firebasestorage.app",
  messagingSenderId: "4066585577",
  appId: "1:4066585577:web:ec74899fd4ffc2c579f978",
  measurementId: "G-LWM9HGLJMP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

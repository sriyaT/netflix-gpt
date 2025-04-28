import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAofY1DaG-YhKHp-JHesF24NzdqePkcP0w",
  authDomain: "netflixgpt-f74d7.firebaseapp.com",
  projectId: "netflixgpt-f74d7",
  storageBucket: "netflixgpt-f74d7.appspot.com",
  messagingSenderId: "4066585577",
  appId: "1:4066585577:web:ec74899fd4ffc2c579f978",
  measurementId: "G-LWM9HGLJMP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

signInWithEmailAndPassword(auth, "sriya@test.com", "sriya@test123")
  .then((userCredential) => {})
  .catch((error) => {});

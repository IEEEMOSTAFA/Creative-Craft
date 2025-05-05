// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUU6kjZFI5GbiCcGig8DHghtLGOnMJIOE",
  authDomain: "hue-crafted.firebaseapp.com",
  projectId: "hue-crafted",
  storageBucket: "hue-crafted.firebasestorage.app",
  messagingSenderId: "887443960270",
  appId: "1:887443960270:web:9fb35111d58e362cc5fb9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
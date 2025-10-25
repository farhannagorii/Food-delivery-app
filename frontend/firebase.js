// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "shahi-zayka.firebaseapp.com",
  projectId: "shahi-zayka",
  storageBucket: "shahi-zayka.firebasestorage.app",
  messagingSenderId: "3652089155",
  appId: "1:3652089155:web:0dec23c088beafc81c6bf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export{app,auth}
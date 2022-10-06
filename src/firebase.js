// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9-M-q5iAZnfDJA3tZgAJFYJIXZaWVAx0",
  authDomain: "chat-dc-c54b2.firebaseapp.com",
  projectId: "chat-dc-c54b2",
  storageBucket: "chat-dc-c54b2.appspot.com",
  messagingSenderId: "1093904224890",
  appId: "1:1093904224890:web:26090cc82bb8d8282621c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)

export const db=getFirestore(app)
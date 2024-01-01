// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from "firebase/firestore"
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpgcQ3g2A3CMN3cVnXYSkjQ-r7q1S1y04",
  authDomain: "myapplication-ed623.firebaseapp.com",
  databaseURL: "https://myapplication-ed623-default-rtdb.firebaseio.com",
  projectId: "myapplication-ed623",
  storageBucket: "myapplication-ed623.appspot.com",
  messagingSenderId: "768981447411",
  appId: "1:768981447411:web:031e4a2510f3338495bd86",
  measurementId: "G-FK2RC4HJL6"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const storage = getStorage();
const provider = new GoogleAuthProvider();
export {db,auth, storage,provider};
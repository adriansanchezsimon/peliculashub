// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-sVbq4fdXpzS-Gc4ClpkeBdjBo60PYjo",
  authDomain: "movie-watchlist-768af.firebaseapp.com",
  databaseURL: "https://movie-watchlist-768af-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "movie-watchlist-768af",
  storageBucket: "movie-watchlist-768af.appspot.com",
  messagingSenderId: "675058316532",
  appId: "1:675058316532:web:6e9be5a9e398888a9edaa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export default app;
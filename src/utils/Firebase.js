// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRkqHUaY6Di3thvM3SpGiWDDKXvIZMwco",
  authDomain: "movie-gpt-a9512.firebaseapp.com",
  projectId: "movie-gpt-a9512",
  storageBucket: "movie-gpt-a9512.appspot.com",
  messagingSenderId: "563074864151",
  appId: "1:563074864151:web:cabef51edf844429b1f852"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);
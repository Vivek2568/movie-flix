// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrpQ15ANRSnK44xTdKQ_9YoJWgBaHNjeI",
  authDomain: "movie-flixgpt.firebaseapp.com",
  projectId: "movie-flixgpt",
  storageBucket: "movie-flixgpt.firebasestorage.app",
  messagingSenderId: "899335783234",
  appId: "1:899335783234:web:cc89d929e049f7c2e8bedb",
  measurementId: "G-WWVZB4BXK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
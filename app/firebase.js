// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxrsyR6KwLZiWqJru880-dETi1c17EZO4",
  authDomain: "esp32calandniv.firebaseapp.com",
  projectId: "esp32calandniv",
  storageBucket: "esp32calandniv.appspot.com",
  messagingSenderId: "943022465570",
  appId: "1:943022465570:web:47cc3482fb68f7a3e3607b",
  measurementId: "G-FBVDC0FPNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
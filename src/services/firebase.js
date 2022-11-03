// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPU14pEjswQySddNgvR1fnYgke436A4AE",
  authDomain: "softsells-5b003.firebaseapp.com",
  projectId: "softsells-5b003",
  storageBucket: "softsells-5b003.appspot.com",
  messagingSenderId: "660477281585",
  appId: "1:660477281585:web:da6e2d4948515f22815c10",
  measurementId: "G-MKN0H4LM2G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI_2pSlkWOyESnBHeN9VIWY08bGy1Sj3c",
  authDomain: "manufacturer-website-tool.firebaseapp.com",
  projectId: "manufacturer-website-tool",
  storageBucket: "manufacturer-website-tool.appspot.com",
  messagingSenderId: "815015458791",
  appId: "1:815015458791:web:c3f7972feda7ba03f52f42",
  measurementId: "G-K0MD2KD1S9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

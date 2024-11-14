// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNIdb4Wy3zP-RruPYgr_kX_bKzBZQrXgk",
  authDomain: "autenticacion-275d5.firebaseapp.com",
  projectId: "autenticacion-275d5",
  storageBucket: "autenticacion-275d5.firebasestorage.app",
  messagingSenderId: "449776596688",
  appId: "1:449776596688:web:faf2118a763b930d8cd0d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
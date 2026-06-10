import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnIhQ-hoCZx35OjuyYAkudl8DDn6gx5Ww",
  authDomain: "comision-93395.firebaseapp.com",
  projectId: "comision-93395",
  storageBucket: "comision-93395.firebasestorage.app",
  messagingSenderId: "879410920589",
  appId: "1:879410920589:web:6e3b77e21d5b8a252636c4"
};

 const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
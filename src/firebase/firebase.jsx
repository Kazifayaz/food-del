// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyANHz31RwQOUjVQo5gUTU7wKPSLardmc0M",
    authDomain: "saylani-exam.firebaseapp.com",
    projectId: "saylani-exam",
    storageBucket: "saylani-exam.firebasestorage.app",
    messagingSenderId: "48142192617",
    appId: "1:48142192617:web:f51acc0422f69169b48578",
    measurementId: "G-SET6VTRRMC"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, setDoc, doc };

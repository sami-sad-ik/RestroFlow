// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVxx2nKGM8CI336RwTu6yjkOAFhr59MP8",
  authDomain: "restroflow-1b903.firebaseapp.com",
  projectId: "restroflow-1b903",
  storageBucket: "restroflow-1b903.firebasestorage.app",
  messagingSenderId: "902457674460",
  appId: "1:902457674460:web:f039fcfe9d80eb5519c219",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

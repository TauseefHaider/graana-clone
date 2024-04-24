import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkQfpgsSevaXVBzSCSPUfiqzqSVw26two",
  authDomain: "graana-c63ff.firebaseapp.com",
  projectId: "graana-c63ff",
  storageBucket: "graana-c63ff.appspot.com",
  messagingSenderId: "669774783585",
  appId: "1:669774783585:web:339ac00243fff7764e7620",
  measurementId: "G-4S2EPB2Q5B",
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };

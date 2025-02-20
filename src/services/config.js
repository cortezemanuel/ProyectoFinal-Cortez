import { initializeApp } from "firebase/app";
import { getFirestore, } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, 
  authDomain: "xmas-cottage.firebaseapp.com",
  projectId: "xmas-cottage",
  storageBucket: "xmas-cottage.appspot.com",
  messagingSenderId: "143846338547",
  appId: "1:143846338547:web:b08c7b5421413703902c86"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


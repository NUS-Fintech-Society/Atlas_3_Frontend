import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "nfs-atlas-3.firebaseapp.com",
  projectId: "nfs-atlas-3",
  storageBucket: "nfs-atlas-3.appspot.com",
  messagingSenderId: "652074107095",
  appId: "1:652074107095:web:c8ed60b1afb4dc44217092"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

if (import.meta.env.DEV) {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
}

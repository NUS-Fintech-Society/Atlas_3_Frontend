import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqZ7qA8zsHThKvXRX5-4XFs8sYkMItRRg",
  authDomain: "nfs-atlas-3.firebaseapp.com",
  projectId: "nfs-atlas-3",
  storageBucket: "nfs-atlas-3.appspot.com",
  messagingSenderId: "652074107095",
  appId: "1:652074107095:web:c8ed60b1afb4dc44217092"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");

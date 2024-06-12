import App from "routes/App.tsx";
import TestPage from "routes/shared/TestPage.tsx";
import LoginPage from "routes/shared/LoginPage.tsx";
import { auth } from "@/firebase";
import { redirect } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";

const ensureLoggedIn = async () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve({ user });
      } else {
        reject(redirect("/login"));
      }
    });
  });
};

const logOut = async () => {
  return await signOut(auth).then(() => redirect("/login"));
};

const routesConfig = [
  {
    path: "/",
    Component: App,
    loader: ensureLoggedIn,
  },
  {
    path: "/test",
    Component: TestPage,
    loader: ensureLoggedIn,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/logout",
    loader: logOut,
  }
];

export default routesConfig;

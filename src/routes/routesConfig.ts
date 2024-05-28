import App from "routes/App.tsx";
import TestPage from "routes/shared/TestPage.tsx";
import LoginPage from "routes/shared/LoginPage.tsx";
import { auth } from "@/firebase";
import { redirect } from "react-router-dom";
import { signOut } from "firebase/auth";

const ensureLoggedIn = () => {
  const user = auth.currentUser;
  if (!user) {
    return redirect("/login");
  }
  return {};
}

const logOut = async () => {
  return await signOut(auth).then(() => redirect("/login"));
}

const routesConfig = [
  {
    path: "/",
    Component: App,
    loader: async () => ensureLoggedIn(),
  },
  {
    path: "/test",
    Component: TestPage,
    loader: async () => ensureLoggedIn(),
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/logout",
    loader: async () => logOut(),
  }
]

export default routesConfig;

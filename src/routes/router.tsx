import { createBrowserRouter } from "react-router-dom";
import TestPage from "./shared/TestPage.tsx";
import App from "./App.tsx";
import LoginPage from "routes/shared/LoginPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/test",
    Component: TestPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  }
]);

export default router;

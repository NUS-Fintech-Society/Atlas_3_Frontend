import { createBrowserRouter } from "react-router-dom";
import TestPage from "./shared/TestPage.tsx";
import App from "./App.tsx";
import ProfilePage from "@/pages/ProfilePage.tsx";

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
    path: "profiles/:id",
    Component: ProfilePage,
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import TestPage from "./shared/TestPage.tsx";
import App from "./App.tsx";
import ProfilePage from "@/pages/ProfilePage.tsx";
import EventPage from "./events/EventPage.tsx";

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
    path: "/events",
    Component: EventPage,
  },
]);

export default router;

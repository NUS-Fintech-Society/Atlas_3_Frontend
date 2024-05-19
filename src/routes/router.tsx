import { createBrowserRouter } from "react-router-dom";
import TestPage from "./shared/TestPage.tsx";
import App from "./App.tsx";
import ProfilePage from "./profiles/ProfilePage.tsx";
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
  {
    path: "/profiles/:id",
    Component: ProfilePage,
  },
]);

export default router;

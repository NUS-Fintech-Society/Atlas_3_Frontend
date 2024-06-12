import { createBrowserRouter } from "react-router-dom";
import TestPage from "./shared/TestPage.tsx";
import App from "./App.tsx";
import Home from "@/pages/Home.tsx";
import Announcements from "@/pages/Announcements.tsx";
import Members from "@/pages/Members.tsx";
import Tasks from "@/pages/Tasks.tsx";
import Events from "@/pages/Events.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path: '/',
      element: <Home />
    },
    {
      path: 'announcements',
      element: <Announcements />
    },
    {
      path: 'members',
      element: <Members />
    },
    {
      path: 'events',
      element: <Events />
    }, {
      path: 'tasks',
      element: <Tasks />
    }]
  },
  {
    path: "/test",
    Component: TestPage,
  }
]);

export default router;

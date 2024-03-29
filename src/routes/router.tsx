import { createBrowserRouter } from "react-router-dom";
import TestPage from "./shared/TestPage.tsx";
import App from "./App.tsx"
import EventPage from "./events/EventPage.tsx";
import ToastDemoPage from "./demo/ToastDemoPage.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: App
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
    path: "/toast-demo",
    Component: ToastDemoPage,
  }
])

export default router
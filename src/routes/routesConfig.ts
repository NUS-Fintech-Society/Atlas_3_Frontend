import App from "routes/App.tsx";
import TestPage from "routes/shared/TestPage.tsx";
import LoginPage from "routes/shared/LoginPage.tsx";

const routesConfig = [
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
]

export default routesConfig;

import { createBrowserRouter } from "react-router";
import { Landing } from "./pages/Landing";
import { About } from "./pages/About";
import { Dashboard } from "./pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
]);

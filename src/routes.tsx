import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Settings from "./Pages/Settings";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/settings", element: <Settings /> },
]);

export default router;

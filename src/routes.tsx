import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Settings from "./Pages/Settings";
import ProfilePage from "./Pages/ProfilePage";
import NewsPage from "./Pages/NewsPage";
import WeatherPage from "./Pages/WeatherPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/settings", element: <Settings /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/news", element: <NewsPage /> },
  { path: "/weather", element: <WeatherPage /> },
]);

export default router;

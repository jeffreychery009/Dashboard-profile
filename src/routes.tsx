import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Settings from "./Pages/Settings";
import ProfilePage from "./Pages/ProfilePage";
import NewsPage from "./Pages/NewsPage";
import WeatherPage from "./Pages/WeatherPage";
import TodoPage from "./Pages/TodoPage";
import TodoList from "./components/TodoList";
import EditTodo from "./components/EditTodoList";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/settings", element: <Settings /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/news", element: <NewsPage /> },
  { path: "/weather", element: <WeatherPage /> },
  { path: "/todolist", element: <TodoList /> },
  { path: "/todolist/edit", element: <TodoPage /> },
  { path: "/todolist/edit/:id", element: <EditTodo /> },
]);

export default router;

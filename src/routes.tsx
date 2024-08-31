import { createBrowserRouter } from "react-router-dom";

import Settings from "./Pages/Settings";
import ProfilePage from "./Pages/ProfilePage";
import NewsPage from "./Pages/NewsPage";
import WeatherPage from "./Pages/WeatherPage";
import TodoPage from "./Pages/TodoPage";
import TodoList from "./Pages/TodoList";
import EditTodo from "./Pages/EditTodoList";
import App from "./App";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/settings", element: <Settings /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/news", element: <NewsPage /> },
  { path: "/weather", element: <WeatherPage /> },
  { path: "/todolist", element: <TodoList /> },
  { path: "/todolist/edit", element: <TodoPage /> },
  { path: "/todolist/edit/:id", element: <EditTodo /> },
]);

export default router;

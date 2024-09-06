import { NavBar, SideBar } from "./components/index";
import {
  Contacts,
  Dashboard,
  News,
  TodoPage,
  Weather,
  Settings,
} from "./pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateContext } from "./context/menuProvider";
import { ThemeProvider } from "./context/themeProvider";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <ThemeProvider>
      <div>
        <BrowserRouter>
          <div className="flex relative">
            {activeMenu ? (
              <div className="w-64 z-50 md:w-72 fixed bg-white dark:bg-gray-900">
                <SideBar />
              </div>
            ) : (
              <div className="w-0">
                <SideBar />
              </div>
            )}
            <div
              className={activeMenu ? "md:ml-72 w-full z-50 " : "w-full z-50"}
            >
              <div className="fixed w-full h-16  ">
                <NavBar />
              </div>
            </div>
          </div>
          <div className={activeMenu ? "md:ml-72 mt-10 p-5" : "mt-10 p-5"}>
            <Routes>
              {/* Pages */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/contact" element={<Contacts />} />
              <Route path="/news" element={<News />} />
              <Route path="/todo-list" element={<TodoPage />} />
              <Route path="/weather" element={<Weather />} />
              {/* Tools */}
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;

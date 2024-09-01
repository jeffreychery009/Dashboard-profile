import React from "react";
import { NavBar, Button, SideBar } from "./components/index";
import { Contacts, Dashboard, News, TodoPage, Weather } from "./pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateContext } from "./context/contextProvider";

const App = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative">
          {activeMenu ? (
            <div className="w-72 fixed bg-white">
              <SideBar />
            </div>
          ) : (
            <div className="w-0">
              <SideBar />
            </div>
          )}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

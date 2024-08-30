import React, { useState } from "react";
import SideBar from "./SideBar";
import MenuContext from "../Context/ContextProvider";

import NavBar from "../NavBar";
import DashboardCentral from "./DashboardCentral";

const HomePage = () => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <div>
      <MenuContext.Provider value={{ activeMenu, setActiveMenu }}>
        {activeMenu ? (
          <div className="w-72 fixed bg-white">
            <SideBar />
          </div>
        ) : (
          <div>
            <SideBar />
          </div>
        )}
        <div className="flex flex-col ">
          <div>
            <NavBar />
          </div>
          <div className={`${activeMenu ? "ml-72" : "ml-0"} w-full h-screen `}>
            <DashboardCentral />
          </div>
        </div>
      </MenuContext.Provider>
    </div>
  );
};

export default HomePage;

import React, { useState } from "react";
import SideBar from "./SideBar";
import MenuContext from "../Context/ContextProvider";

import NavBar from "../NavBar";

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
        <div>
          <NavBar />
        </div>
      </MenuContext.Provider>
    </div>
  );
};

export default HomePage;

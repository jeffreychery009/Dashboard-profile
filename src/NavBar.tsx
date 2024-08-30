import React, { useEffect } from "react";

import MenuContext from "./Context/ContextProvider";
import { MdOutlineMenu } from "react-icons/md";

const NavBar = () => {
  const { activeMenu, setActiveMenu } = React.useContext(MenuContext);

  useEffect(() => {
    if (activeMenu) {
      document.body.classList.add("overflow-x-hidden");
    } else {
      document.body.classList.remove("overflow-x-hidden");
    }
  }, [activeMenu]);

  return (
    <>
      <div className="">
        <div
          className={`flex items-center w-full transition-all ${
            activeMenu ? "transform translate-x-72" : ""
          }`}
        >
          <button className={`py-4 ${!activeMenu ? "ml-4" : ""}`}>
            <MdOutlineMenu
              onClick={() => setActiveMenu(!activeMenu)}
              className="text-2xl md:text-3xl"
            />
          </button>
          <h1 className="text-center flex-1 mr-9 text-2xl md:text-3xl md:flex-1">
            Dashboard.io
          </h1>
        </div>
      </div>
    </>
  );
};

export default NavBar;

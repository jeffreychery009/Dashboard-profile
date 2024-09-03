import React, { useEffect } from "react";
import { IoIosMenu } from "react-icons/io";
import { useStateContext } from "../context/contextProvider";

const NavBar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 769) {
        setActiveMenu(false);
      } else {
        setActiveMenu(true);
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="bg-white border-b-[1px] border-gray-400">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <button
            onClick={() => setActiveMenu(!activeMenu)}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <IoIosMenu className="text-2xl" />
          </button>
          <div className="flex-1 flex justify-center">
            <h1
              className={
                !activeMenu
                  ? "text-3xl font-semibold text-gray-900 transition-all duration-300"
                  : "text-3xl font-semibold text-gray-900 transition-all duration-300 lg:mr-52"
              }
            >
              Dashboard.io
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

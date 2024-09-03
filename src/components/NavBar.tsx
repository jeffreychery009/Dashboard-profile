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
      <div>
        <div className="flex justify-between items-center">
          <button onClick={() => setActiveMenu(!activeMenu)}>
            <IoIosMenu className="text-2xl" />
          </button>
          <div className="flex-1 flex justify-center">
            <h1
              className={
                !activeMenu
                  ? "mr-10 text-3xl font-medium"
                  : "text-3xl font-medium lg:mr-52"
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

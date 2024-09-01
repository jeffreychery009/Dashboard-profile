import React from "react";
import { IoIosMenu } from "react-icons/io";
import { useStateContext } from "../context/contextProvider";

const NavBar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <>
      <div className="">
        <div className="flex justify-between">
          <button onClick={() => setActiveMenu(!activeMenu)}>
            <IoIosMenu className="text-2xl" />
          </button>
          <h1 className="mx-auto md:ml-auto">Dashboard.io</h1>
        </div>
      </div>
    </>
  );
};

export default NavBar;

import React from "react";
import { links } from "../data/DummyData";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/contextProvider";

const SideBar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <>
      {activeMenu && (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
          <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-medium">Dashboard.io</h1>
            <button onClick={() => setActiveMenu(!activeMenu)}>
              <MdOutlineCancel />
            </button>
          </div>
          <div className="mt-10">
            {links.map((link) => {
              return (
                <div key={link.title}>
                  <p className="text-gray-400 m-3 mt-10 uppercase font-light">
                    {link.title}
                  </p>
                  {link.links.map((sublink) => (
                    <Link to={`/${sublink.link}`}>
                      <span
                        className="flex items-center gap-5 pl-4 pt-3 pb-2.5 capitalize font-light"
                        key={sublink.name}
                      >
                        {sublink.name}
                      </span>
                    </Link>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;

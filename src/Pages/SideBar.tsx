import React, { useContext } from "react";
import { links } from "../DummyData";
import { MdOutlineCancel } from "react-icons/md";
import MenuContext from "../Context/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useContext(MenuContext);

  return (
    <div>
      {activeMenu && (
        <>
          <div className="ml-3 h-screen overflow-auto pb-10 mt-4">
            <div>
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold m-3">Dashboard.io</h1>
                <button onClick={() => setActiveMenu(!activeMenu)}>
                  <MdOutlineCancel className="mr-2 hover:bg-gray-200 rounded-full" />
                </button>
              </div>
              <div className="mt-10">
                {links.map((link) => (
                  <div key={link.title}>
                    <p className="text-gray-400 m-3 mt-10 uppercase font-light">
                      {link.title}
                    </p>
                    {link.links.map((subLink) => (
                      <span
                        key={subLink.name}
                        className="flex items-center gap-5 pl-4 pt-3 pb-2.5 capitalize font-light"
                      >
                        {subLink.name}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;

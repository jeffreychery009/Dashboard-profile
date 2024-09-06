import { links } from "../data/DummyData";
import { MdOutlineCancel } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useStateContext } from "../context/menuProvider";

const SideBar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const location = useLocation();

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-md text-white bg-gradient-to-r from-[#0A42D4] to-[#20A2D9] text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-md text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-gray-100 m-2";

  return (
    <>
      {activeMenu && (
        <div className="z-50 ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 border-r-[1px] border-gray-400">
          <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-medium mx-auto dark:text-gray-100">
              Dashboard.io
            </h1>
            <button
              onClick={() => setActiveMenu(!activeMenu)}
              className="hover:bg-slate-300 rounded-full dark:text-white"
            >
              <MdOutlineCancel />
            </button>
          </div>
          <div className="mt-10">
            {links.map((link) => (
              <div key={link.title}>
                <p className="text-gray-400 m-3 mt-10 uppercase font-light">
                  {link.title}
                </p>
                {link.links.map((sublink) => {
                  const isActive = location.pathname === `/${sublink.link}`;
                  return (
                    <Link to={`/${sublink.link}`} key={sublink.name}>
                      <span
                        className={`${
                          isActive ? activeLink : normalLink
                        } capitalize`}
                      >
                        {sublink.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;

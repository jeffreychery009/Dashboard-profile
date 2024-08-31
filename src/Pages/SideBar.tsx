import { links } from "../DummyData";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import { useStateContext } from "../Context/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <div>
      {activeMenu && (
        <div
          className=" fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 overflow-y-auto pb-10 transition-transform transform translate-x-0 duration-300"
          style={{
            paddingTop: "env(safe-area-inset-top)",
            paddingBottom: "env(safe-area-inset-bottom)",
          }}
        >
          <div className="flex justify-between items-center p-4">
            <h1 className="text-xl font-bold">Dashboard.io</h1>
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
                  <Link to={`/${subLink.link}`}>
                    <span
                      key={subLink.name}
                      className="flex items-center gap-5 pl-4 pt-3 pb-2.5 capitalize font-light"
                    >
                      {subLink.name}
                    </span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

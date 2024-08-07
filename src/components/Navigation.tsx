import x from "../assets/x.svg";
import user from "../assets/user.svg";
import cloud from "../assets/cloud.svg";
import article from "../assets/article.svg";
import listcheck from "../assets/list-checks.svg";
import gear from "../assets/gear.svg";
import headset from "../assets/headset.svg";

// Definining NavigationProps interface

interface NavigationProps {
  isOpen: boolean;
  toggleNav: () => void;
}

const Navigation = ({ isOpen, toggleNav }: NavigationProps) => {
  return (
    <>
      <nav
        className={`fixed top-0 left-0 p-4 h-full bg-custom-bg overflow-y-auto transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out`}
        style={{ width: "100%" }}
      >
        <button onClick={toggleNav}>
          <img
            className="mt-2"
            src={x}
            alt=""
            style={{ width: "28px", height: "28px" }}
          />
        </button>

        <div className="mt-[140px]">
          <h1 className="text-center text-lg font-semibold bg-blue-gradient bg-clip-text text-transparent">
            Dashboard.io
          </h1>
        </div>

        <div className="mt-[140px]  ">
          <ul className="col-span-1 space-y-[52px]">
            <li className="flex">
              <img
                src={user}
                alt=""
                style={{ width: "28px", height: "28px" }}
              />
              <a className="pl-[12px] mt-[2px]" href="#">
                Profile
              </a>
            </li>
            <li className="flex">
              <img
                src={cloud}
                alt="cloud"
                style={{ width: "28px", height: "28px" }}
              />{" "}
              <a className="pl-[12px] mt-[2px]" href="#">
                Weather
              </a>
            </li>
            <li className="flex">
              <img
                src={article}
                alt=""
                style={{ width: "28px", height: "28px" }}
              />
              <a className="pl-[12px] mt-[1px]" href="#">
                News
              </a>
            </li>
            <li className="flex">
              <img
                src={listcheck}
                alt=""
                style={{ width: "28px", height: "28px" }}
              />
              <a className="pl-[11px] mt-[1px]" href="#">
                Todo-List
              </a>
            </li>
            <li className="flex">
              <img
                src={gear}
                alt=""
                style={{ width: "28px", height: "28px" }}
              />
              <a className="pl-[11px] mt-[2px]" href="#">
                Settings
              </a>
            </li>
            <li className="flex">
              <img src={headset} alt="" />
              <a className="pl-[11px] mt-[2px]" href="#">
                Support
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

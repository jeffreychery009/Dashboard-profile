import user from "../../assets/user.svg";
import cloud from "../../assets/cloud.svg";
import news from "../../assets/article.svg";
import gear from "../../assets/gear.svg";
import headphones from "../../assets/headset.svg";
import checklist from "../../assets/list-checks.svg";
import profile from "../../assets/ProfileImage.jpg";

const NavbarDesktop = () => {
  const navElements = [
    { text: "Profile", icon: user },
    { text: "Weather", icon: cloud },
    { text: "News", icon: news },
    { text: "Settings", icon: gear },
    { text: "Todo List", icon: checklist },
    { text: "Support", icon: headphones },
  ];

  return (
    <>
      <div>
        <div className="fixed top-0 left-0 w-full max-w-[250px] h-screen bg-light-gray bg-opacity-20 z-10">
          <h2 className="text-center text-md font-semibold my-8 bg-blue-gradient bg-clip-text text-transparent">
            Dashboard.io
          </h2>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <div>
            <ul>
              {navElements.map((element, index) => (
                <li key={index} className="flex items-center p-4">
                  <img
                    className="w-4 h-4"
                    src={element.icon}
                    alt={`${element.text} icon`}
                  />
                  <span className="ml-4 text-xs bg-blue-gradient bg-clip-text text-transparent">
                    {element.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white h-[60px] w-[240px] rounded-[20px] shadow-sm flex absolute left-1/2 transform -translate-x-1/2 bottom-[20px]">
            <img
              className="w-[36px] h-[36px] rounded-full my-auto mx-[12px]"
              src={profile}
              alt="profile image"
            />
            <div className="my-auto">
              <p className="">Jeffrey Chery</p>
              <p className="text-xs text-gray-400">user12@mail.dashboard.io</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarDesktop;

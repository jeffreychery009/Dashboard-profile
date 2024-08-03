import profileImage from "../assets/ProfileImage.jpg";
import Menu from "../assets/list.svg";
import NewsCard from "./Cards/NewsCard";
import ProfileCard from "./Cards/ProfileCard";
import SettingsCard from "./Cards/SettingsCard";
import TodoListCard from "./Cards/TodoListCard";
import WeatherCard from "./Cards/WeatherCard";

const HomePage = () => {
  const user = "Jeffrey";

  return (
    <>
      <div className="custom-mobile:flex justify-between items-center mb-5">
        <img src={Menu} alt="" />
        <h1 className="h1-style text-center ">Dashboard.io</h1>
        <img
          className="w-[28px] h-[28px] rounded-full"
          src={profileImage}
          alt=""
        />
      </div>
      <div className="flex justify-center mb-5">
        <input
          className="search-input" // Added text-gray-300 class for light-grey text color
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="mb-4">
        <span className="text-custom-text">Hi {user},</span>
        <h2 className="text-md font-semibold py-1">
          Welcome to your{" "}
          <span className="bg-blue-gradient bg-clip-text text-transparent">
            Dashboard
          </span>
        </h2>
      </div>
      <div className="mb-3">
        <h2 className="text-md font-semibold text-custom-text">Overview</h2>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-4">
        <ProfileCard />
        <WeatherCard />
        <NewsCard />
        <TodoListCard />
        <SettingsCard />
      </div>
      <p className="text-center text-xs p-4 bg-blue-gradient bg-clip-text text-transparent">
        Copyright © Dashboard.io
      </p>
    </>
  );
};

export default HomePage;

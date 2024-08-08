import { Link } from "react-router-dom";
import chevron from "../assets/caret-left.svg";
import profile from "../assets/ProfileImage.jpg";

const ProfilePage = () => {
  const smallCards = [
    { id: 1, text: "Age: 23" },
    { id: 2, text: "Location" },
    { id: 3, text: "Male" },
  ];

  return (
    <>
      <div className="relative flex items-center justify-between mb-[160px]">
        <Link to="/">
          <img src={chevron} alt="" />
        </Link>
        <h2 className="text-sm font-semibold absolute left-1/2 transform -translate-x-1/2">
          User Profile
        </h2>
      </div>
      <div className="card-style-profile">
        <div className="flex justify-center mt-[72px]">
          <img
            className=" w-[120px] h-[120px] rounded-full"
            src={profile}
            alt=""
          />
        </div>
        <div className="flex justify-center mt-[32px]">
          <h3 className="text-sm font-semibold">Jeffrey Chery</h3>
        </div>
        <div className="flex justify-center">
          <p className="text-xs text-custom-text">Software Engineer</p>
        </div>
        <div className="flex justify-between mt-[36px]">
          {smallCards.map((cards) => (
            <div className="w-[84px] h-[44px] rounded-[24px] ring-1 flex justify-center items-center bg-customBlue">
              <div
                className="text-center text-xs font-semibold bg-blue-gradient bg-clip-text text-transparent"
                key={cards.id}
              >
                {cards.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <>
      <div className="card-style">
        <div className="flex flex-col h-full justify-between">
          <h3 className="text-sm font-medium">Profile</h3>
          <p className=" text-ui font-medium bg-blue-gradient bg-clip-text text-transparent">
            View your profile
          </p>
          <p className=" text-xs bg-blue-gradient bg-clip-text text-transparent">
            <Link to="/profile">Click to see more</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;

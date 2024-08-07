import { Link } from "react-router-dom";

const SettingsCard = () => {
  return (
    <>
      <div className="card-style">
        <h3 className="text-sm font-medium mb-4">Settings</h3>
        <p>
          <a className="bg-blue-gradient bg-clip-text text-transparent" href="">
            <Link to="/settings">Access your Settings</Link>
          </a>
        </p>
      </div>
    </>
  );
};

export default SettingsCard;

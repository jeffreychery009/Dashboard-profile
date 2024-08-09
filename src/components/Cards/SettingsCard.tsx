import { Link } from "react-router-dom";

const SettingsCard = () => {
  return (
    <>
      <div className="card-style">
        <Link to="/settings">
          <h3 className="text-sm font-medium mb-4">Settings</h3>
          <p className="bg-blue-gradient bg-clip-text text-transparent">
            Click to view your settings
          </p>
        </Link>
      </div>
    </>
  );
};

export default SettingsCard;

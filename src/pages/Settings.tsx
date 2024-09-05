import React from "react";
import { useThemeContext } from "../context/themeProvider";

const SettingsPage: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className="p-6 bg-white mt-10 rounded-lg shadow-lg dark:bg-gray-900">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
        Settings
      </h1>

      <div className="flex items-center justify-between">
        <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
          Toggle Dark Mode
        </span>
        <button
          onClick={toggleTheme}
          className="bg-gradient-to-r from-[#0A42D4] to-[#20A2D9] text-white py-2 px-4 rounded"
        >
          {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;

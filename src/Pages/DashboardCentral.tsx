import React from "react";
import MenuContext from "../Context/ContextProvider";

const DashboardCentral = () => {
  const { activeMenu } = React.useContext(MenuContext);

  return (
    <>
      <div className={`${activeMenu ? "pl-2" : "pl-4"} pr-4`}>
        <div className="shadow-xl mt-4 h-60 flex  items-center">
          <p className="">Welcome to your Dashboard</p>
        </div>
        <div className="w-full overflow-x-hidden">
          <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="shadow-xl h-60 flex items-center justify-center p-4">
              <p>Card 1</p>
            </div>
            <div className="shadow-xl h-60 flex items-center justify-center p-4">
              <p>Card 2</p>
            </div>
            <div className="shadow-xl h-60 flex items-center justify-center p-4">
              <p>Card 3</p>
            </div>
            <div className="shadow-xl h-60 flex items-center justify-center p-4">
              <p>Card 4</p>
            </div>
            <div className="shadow-xl h-60 flex items-center justify-center p-4 md:col-span-2 lg:col-span-2">
              <p>Card 5</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default DashboardCentral;

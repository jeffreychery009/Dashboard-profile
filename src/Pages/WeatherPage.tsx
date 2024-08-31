import React from "react";
import MenuContext from "../Context/ContextProvider";
import NavBar from "../NavBar";

const WeatherPage = () => {
  const { activeMenu, setActiveMenu } = React.useContext(MenuContext);

  return (
    <>
      <div>
        <NavBar />
      </div>
    </>
  );
};

export default WeatherPage;

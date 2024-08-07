import caretLeft from "../assets/caret-left.svg";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import { Link } from "react-router-dom";
import { FormEvent, useRef } from "react";

const Settings = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);

  const personalInfo = { name: "", location: "" };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Check if the input fields are not null and storing values in personalInfo object

    if (nameRef.current && locationRef.current) {
      personalInfo.name = nameRef.current.value;
      personalInfo.location = locationRef.current.value;

      // Clear the input fields
      nameRef.current.value = "";
      locationRef.current.value = "";
    }
  };

  return (
    <>
      <div className="relative flex items-center justify-between mb-[72px]">
        <Link to="/">
          <img src={caretLeft} alt="back chevron" />
        </Link>

        <h2 className="text-sm font-semibold absolute left-1/2 transform -translate-x-1/2">
          Settings
        </h2>
      </div>

      <div className="mb-[60px]">
        <div className="mb-3">
          <label className="font-semibold ml-2 "> Change Theme</label>
        </div>
        <div className="flex">
          {/* Buttons for Theme */}
          <div className="gradient-border-light mr-[12px]">
            <div className="content flex items-center">
              <img className="h-4 w-4" src={sun} alt="sun icon" />
              <p className="ml-[12px]">Light</p>
            </div>
          </div>
          <div className="gradient-border-dark">
            <div className="content flex items-center">
              <img className="h-4 w-4 " src={moon} alt="moon icon" />
              <p className="ml-[12px] ">Dark</p>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <div className="flex flex-col gap-3">
            <label className="font-semibold ml-2" htmlFor="">
              Edit or Change Name
            </label>
            <input
              ref={nameRef}
              className="edit-input"
              type="text"
              placeholder="New or Edit Name..."
            />
          </div>
        </div>
        <div className="mt-[44px]">
          <div className="flex flex-col gap-3">
            <label className="font-semibold ml-2" htmlFor="">
              Edit your Location
            </label>
            <input
              ref={locationRef}
              className="edit-input"
              type="text"
              placeholder="New Location..."
            />
          </div>
        </div>
        <button className="flex justify-center items-center h-[50px] w-[180px] rounded-[30px] border border-blue bg-white mt-5 mx-auto">
          Save Changes
        </button>
      </form>
    </>
  );
};

export default Settings;

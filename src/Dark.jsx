import React, { useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";


const Dark = () => {
  const [dark, setDark] = useState(false);

  const DarkHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <>
      <div className="mobileDark">
        <button className="mobileButton text-[17px] dark:text-white" onClick={() => DarkHandler()}>
          {dark && <IoSunny />}
          {!dark && <IoMoon />}
        </button>
      </div>
    </>
  );
};

export default Dark;

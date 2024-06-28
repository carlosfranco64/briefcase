import React from "react";
import { useAll } from "../../context/AllContext";
import { MdLightMode, MdNightsStay } from "react-icons/md";
import { TfiMenu } from "react-icons/tfi";

export const Header = () => {
  const { isMode,showMode,showMenu} = useAll();

  return (
    <div
      className={` px-6 ${
        isMode ? "bg-blue-100 text-blue-500" : "bg-gray-800 text-white"
      }   w-full border-l font-bold flex justify-between `}
    >
      
      <div className="flex items-center gap-4 ">
    <button className={` p-2 rounded-full ${isMode ? " bg-blue-100": " bg-gray-800"} fixed left-4`}>
        <TfiMenu 
            onClick={showMenu}
            className={`font text-3xl ${isMode ? "text-blue-800":""} cursor-pointer`}
        />
    </button>
    <h1 className="ml-12 md:ml-0 text-2xl my-4">Portafolio</h1>
</div>

      <div
        onClick={showMode}
        className={`flex gap-4 justify-start fixed right-4 ${
          isMode ? "bg-blue-100" : "bg-gray-800"
        } rounded-full p-2 my-2 z-10 `}
      >
        {/* <h1>idioma </h1> */}

        {isMode ? (
          <MdNightsStay
            onClick={showMode}
            className="my-auto text-3xl font-bold cursor-pointer text-blue-800 -rotate-30 "
          />
        ) : (
          <MdLightMode
            onClick={showMode}
            className="my-auto text-3xl font-bold cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

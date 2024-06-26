import React from "react";
import { useAll } from "../../context/AllContext";

export const Skills = ({ skill }) => {
  const { isMode } = useAll();

  return (
    <div
    key={skill.title}
    className={`flex flex-col items-center justify-center space-y-2 py-4 sm:py-6 px-4 sm:px-6 md:px-8 ${isMode ? "bg-white border border-black" : "bg-gray-800 border border-white"} rounded-3xl`}
  >
    <div className="bg-gray-500 rounded-full p-4 dark:bg-gray-950">
      <skill.icon className={`${skill.styleIcon} text-3xl`} />
    </div>
    <div className="text-center">
      <h3 className={`text-base sm:text-lg md:text-xl font-bold ${isMode ? "text-blue-500" : "text-white"}`}>
        {skill.title}
      </h3>
      <p className={`${isMode ? "text-gray-900" : "text-white"} text-sm sm:text-base md:text-lg text-justify`}>
        {skill.description}
      </p>
    </div>
  </div>
  
  
  );
};

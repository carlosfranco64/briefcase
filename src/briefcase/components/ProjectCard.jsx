import React from "react";
import { Link } from "react-router-dom";
import { useAll } from "../../context/AllContext";
import { Button } from "@headlessui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

export const ProjectCard = ({ project }) => {

const {isMode}=useAll()

  return (
    <div>
      <div className="relative group overflow-hidden  rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <img
          src={`${project.img}`}
          alt=""
          className="object-cover w-full h-48"
        />
        <div className={` ${
            isMode ? "bg-white" : "bg-gray-800"
          } p-4 `}>
          <h3 className={`${
              isMode ? "text-gray-700" : "text-white"
            } font-bold text-xl mb-2 text-black`}>{project.title}</h3>
          <p className={`${
              isMode ? "text-gray-700" : "text-white"
            } text-justify`}>
            {project.description}
          </p>
          <div className="mt-4 flex gap-2">    
            <Button
              to="/"
              className="inline-block bg-blue-500 hover:bg-gray-800 text-white px-4 py-1 rounded-md text-xl font-medium shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              <IoEyeSharp />
            </Button>



         
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="my-auto"
          >
            <FaGithub
              className={` ${
                isMode
                  ? "text-gray-700"
                  : "text-white bg-gray-700 hover:text-gray-900"
              } transition duration-300 rounded-full`}
              size={30}
            />
          </a>




          </div>
        </div>
      </div>
    </div>
  );
};

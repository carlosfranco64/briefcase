import React from "react";
import { useAll } from "../../context/AllContext";
import { Button } from "@headlessui/react";
import { FaGithub } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Link } from "react-router-dom";

export const ProjectCard = ({ project }) => {
  const { isMode } = useAll();

  return (
    <div className="">
      <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <img
          src={`${project.img}`}
          alt="este proyecto esta en desarrollo"
          className="object-cover w-full h-48"
        />
        <div className={`${isMode ? "bg-white" : "bg-gray-800"} p-4`}>
          <h3 className={`${isMode ? "text-gray-700" : "text-white"} font-bold text-xl mb-2`}>
            {project.title}
          </h3>
          <Accordion activeIndex={1}  >

<AccordionTab  style={isMode & {color:'black'}}  header="Ver mas" className={`${isMode ? "":""}`}>

  <div className={`${isMode ? "":""}`}>

          <p className={`${
            isMode ? "text-gray-700" : "text-gray-700"
          } text-justify`}>
            {project.description}
          </p>

            </div>

              </AccordionTab>
            </Accordion>


          <div className="mt-4 flex gap-2">
            <Link
              to={project.linkEyes}
               target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-gray-800 text-white px-4 py-1 rounded-md text-xl font-medium shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              <IoEyeSharp />
            </Link>

            <Link
              to={project.linkGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="my-auto"
            >
              <FaGithub
                className={`${isMode ? "text-gray-700" : "text-white bg-gray-700 hover:text-gray-900"} transition duration-300 rounded-full`}
                size={30}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

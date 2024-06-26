import React from "react";
import { FaBriefcase, FaLaptopCode, FaUserCheck } from "react-icons/fa";
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { FaGear } from "react-icons/fa6";
import { IoHomeSharp } from "react-icons/io5";
import { IoIosPaperPlane } from "react-icons/io";
import { useAll } from "../../context/AllContext";

export const NavBar = () => {
  const { isOpen, showMenu, isMode } = useAll();

  return (
    <div
      className={`${isOpen ? "w-52" : "w-16"} h-screen ${
        isMode ? "bg-blue-100 text-blue-500" : "bg-gray-800 text-white"
      } fixed hidden md:inline-block `}
    >
      <div className="bg-blue-500 flex justify-between items-center p-4 px-4">
        {isOpen && (
          <h1 className=" font">
            <FaBriefcase className="text-2xl text-white" />
          </h1>
        )}
        {isOpen && (
          <h4 className=" font-extrabold px-2 text-white">Bienvenido</h4>
        )}

        {isOpen ? (
          <RiMenuFoldLine
            onClick={showMenu}
            className=" font text-3xl cursor-pointer text-white"
          />
        ) : (
          <RiMenuUnfoldLine
            onClick={showMenu}
            className=" font text-3xl cursor-pointer text-white"
          />
        )}
      </div>

      <nav className={`grid mt-20 gap-8 ${isOpen ? "pl-4" : "pl-2"}`}>
        <NavLink
          className={({ isActive }) =>
            ` ${
              isActive
                ? isMode
                  ? " bg-blue-200 border-l-4 border-blue-500 rounded-l-md text-white "
                  : " bg-gray-600 border-l-4 border-blue-100 rounded-l-md text-white "
                : ""
            } flex gap-2  py-2 pl-2 `
          }
          to="/"
        >
          <IoHomeSharp className=" text-3xl" />
          {isOpen && <span className="my-auto  text-xl">Inicio</span>}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            ` ${
              isActive
                ? isMode
                  ? " bg-blue-200 border-l-4 border-blue-500 rounded-l-md text-white "
                  : " bg-gray-600 border-l-4 border-blue-100 rounded-l-md text-white "
                : ""
            } flex gap-2  py-2 pl-2 `
          }
          to="/about"
        >
          <FaUserCheck className=" text-3xl" />
          {isOpen && <span className="my-auto  text-xl">Acerca de</span>}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            ` ${
              isActive
                ? isMode
                  ? " bg-blue-200 border-l-4 border-blue-500 rounded-l-md text-white "
                  : " bg-gray-600 border-l-4 border-blue-100 rounded-l-md text-white "
                : ""
            } flex gap-2  py-2 pl-2 `
          }
          to="/project"
        >
          <FaLaptopCode className=" text-3xl" />
          {isOpen && <span className="my-auto  text-xl">Proyectos</span>}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            ` ${
              isActive
                ? isMode
                  ? " bg-blue-200 border-l-4 border-blue-500 rounded-l-md text-white "
                  : " bg-gray-600 border-l-4 border-blue-100 rounded-l-md text-white "
                : ""
            } flex gap-2  py-2 pl-2 `
          }
          to="/skills"
        >
          <FaGear className=" text-3xl" />
          {isOpen && <span className="my-auto  text-xl">Habilidades</span>}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            ` ${
              isActive
                ? isMode
                  ? " bg-blue-200 border-l-4 border-blue-500 rounded-l-md text-white "
                  : " bg-gray-600 border-l-4 border-blue-100 rounded-l-md text-white "
                : ""
            } flex gap-2  py-2 pl-2 `
          }
          to="/contact"
        >
          <IoIosPaperPlane className=" text-3xl" />
          {isOpen && <span className="my-auto  text-xl">Contacto</span>}
        </NavLink>
      </nav>
    </div>
  );
};

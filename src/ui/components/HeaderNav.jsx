import React from 'react'
import { useAll } from '../../context/AllContext';
import { FaBriefcase } from 'react-icons/fa';
import { RiMenuFoldLine, RiMenuUnfoldLine } from 'react-icons/ri';

export const HeaderNav = () => {

    const { isOpen, showMenu } = useAll();

  return (
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
  )
}

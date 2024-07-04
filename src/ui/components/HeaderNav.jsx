import React from 'react';
import { useAll } from '../../context/AllContext';
import { FaBriefcase } from 'react-icons/fa';
import { RiMenuFoldLine, RiMenuUnfoldLine } from 'react-icons/ri';
import { animated, useSpring } from 'react-spring';

export const HeaderNav = () => {
  const { isOpen, showMenu } = useAll();

  const menuIconSpring = useSpring({
    transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.div
      style={menuIconSpring}
      className="bg-blue-500 flex justify-between items-center p-4 px-4"
    >
      {isOpen && (
        <h1>
          <FaBriefcase className="text-2xl text-white" />
        </h1>
      )}
      {isOpen && (
        <h4 className="font-extrabold px-2 text-white">Bienvenido</h4>
      )}

      <div
        onClick={showMenu}
        className="cursor-pointer text-white"
      >
        {isOpen ? (
          <RiMenuFoldLine className="text-3xl" />
        ) : (
          <RiMenuUnfoldLine className="text-3xl" />
        )}
      </div>
    </animated.div>
  );
};

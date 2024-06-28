import { createContext, useContext, useState } from "react";

export const AllContext = createContext();

export const useAll = () => {
  const context = useContext(AllContext);
  if (!context) {
    throw new Error(" useAll must be within an TaskAll");
  }

  return context;
};

export const AllProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMode, setIsMode] = useState(true);

  const showMode = () => {
    setIsMode(!isMode);
  };
  const showMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AllContext.Provider value={{ isOpen, showMenu, isMode, showMode }}>
      {children}
    </AllContext.Provider>
  );
};

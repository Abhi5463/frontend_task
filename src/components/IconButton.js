import React from "react";
import {
    AiOutlineDown,
  } from "react-icons/ai";

const IconButton = ({ icon, onClick, hasDropdown }) => {
  const handleClick = () => {
    onClick();
  };

  return (
      <div className="flex justify-center items-center space-x-2 bg-blue-800 border-transparent text-white p-3 cursor-pointer" onClick={handleClick}>
        {icon}
        {hasDropdown && <AiOutlineDown />}
      </div>
  );
};

export default IconButton;

import React from 'react';

const Dropdown = ({ options, position }) => {
  const { top, left } = position;

  const dropdownStyle = {
    top: `${top}px`, 
    left: `${left}px`, 
  };

  return (
    <div style={dropdownStyle} className="absolute mt-2 ml-2 bg-white border border-gray-300 rounded shadow-md z-10 font-serif">
      <ul className="py-1">
        {options.map((option, index) => (
          <li
            key={index}
            className="cursor-pointer hover:bg-gray-200 px-4 py-2"
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;

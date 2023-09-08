import React from 'react';

const Label = ({ icon, text }) => {
  return (
    <div className="flex items-center py-2 px-4 cursor-pointer text-gray-500 hover:bg-gray-300 font-serif opacity-90">
      <div className="flex-grow">{text}</div>
      <div>{icon}</div>
    </div>
  );
};

export default Label;

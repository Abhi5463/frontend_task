import React from 'react';

const EmailOption = ({ icon, name, count, isActive }) => {
    
  return (
    <div className = {`flex items-center py-2 px-4 cursor-pointer ${
        isActive ? 'text-red-500' : 'text-gray-500'
      } hover:bg-gray-300 font-serif opacity-90`}>
      {icon}
      <div className="flex-grow">{name}</div>
      {count > 0 && <div className={`${isActive ? 'text-red-500' : 'text-gray-500'}`}>{`(${count})`}</div>}
    </div>
  );
};

export default EmailOption;

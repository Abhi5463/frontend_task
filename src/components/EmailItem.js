import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const EmailItem = ({
  name,
  count,
  snippet,
  date,
  labels,
}) => {
  const getColorClass = (label) => {
    const colorMap = {
      theme: "bg-red-700",
      freelance: "bg-blue-700",
      social: "bg-green-700",
      friends: "bg-purple-700",
      family: "bg-yellow-700",
    };
    console.log(label);
    return colorMap[label] || "bg-blue-700"; 
  };

  const [isUnread, setIsUnread] = useState(false);
  const [checked, setChecked] = useState(false);
  const [starred, setStarred] = useState(false);

  return (
    <div className={`flex items-center py-2 border-b border-gray-300 ${isUnread ? "text-gray-500" : "text-black-500"}  font-serif opacity-90 cursor-pointer hover:bg-gray-300`}>
      <div className="flex-none flex mr-2">
        <div className="px-2" >
          <input type="checkbox" checked={checked} onChange={()=> setChecked((prev)=> !prev)}/>
        </div>
        <div onClick={()=> setStarred((prev)=> !prev)}>
          <button>
            {starred ? <AiFillStar color="yellow" /> : <AiOutlineStar />}
          </button>
        </div>
      </div>

      <div className="flex-none flex mr-2 w-32">
        <div className="px-2">{name}</div>
        <div>{`(${count})`}</div>
      </div>

      <div className="flex-grow flex ml-2" onClick={()=>setIsUnread((prev)=>!prev)}>
        <div className="flex-grow overflow-hidden flex flex-row">
          <div className="px-1 hidden sm:block">
            {labels.map((label, index) => (
              <span
                key={index}
                className={`p-1 ${getColorClass(label)} text-white`}
              >
                {label}
              </span>
            ))}
          </div>
          <div className="text-ellipsis whitespace-nowrap w-1">{snippet}</div>
        </div>
      </div>

      <div className="flex-none px-2">{date}</div>
    </div>
  );
};

export default EmailItem;

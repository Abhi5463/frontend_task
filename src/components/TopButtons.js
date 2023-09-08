import React from "react";
import {
  AiOutlineInbox,
  AiOutlineMore,
  AiOutlineExclamationCircle,
  AiOutlineTag,
  AiOutlineDelete,
  AiOutlineFolderOpen,
} from "react-icons/ai";
import IconButton from "./IconButton";

const TopButtons = ({ toggleDropdown1, toggleDropdown2, toggleDropdown3 }) => {
  return (
    <div className="flex items-center p-3 flex-wrap">
      {/* First Part - Inbox, Important, Trash Icons */}
      <div className="flex mb-2 mr-2 rounded-md overflow-hidden">
        <IconButton
          icon={<AiOutlineInbox />}
          onClick={() => console.log("Inbox clicked")}
          hasDropdown={false}
        />
        <IconButton
          icon={<AiOutlineExclamationCircle />}
          onClick={() => console.log("Important clicked")}
          hasDropdown={false}
        />
        <IconButton
          icon={<AiOutlineDelete />}
          onClick={() => console.log("Trash clicked")}
          hasDropdown={false}
        />
      </div>

      {/* Second Part - Folder and Dropdown Icon */}
      <div className="flex mb-2 rounded-md overflow-hidden mr-2">
        <IconButton
          icon={<AiOutlineFolderOpen />}
          onClick={toggleDropdown1}
          hasDropdown={true}
        />
      </div>

      {/* Third Part - Tag and Dropdown Icon */}
      <div className="flex mb-2 rounded-md overflow-hidden mr-2">
        <IconButton
          icon={<AiOutlineTag />}
          onClick={toggleDropdown2}
          hasDropdown={true}
        />
      </div>

      {/* Fourth Part - More Button and Dropdown Icon */}
      <div className="flex mb-2 rounded-md overflow-hidden mr-2">
        <IconButton
          icon={
            <button className="text-xs font-serif">More</button>
          }
          onClick={toggleDropdown3}
          hasDropdown={false}
        />
        <IconButton
          icon={<AiOutlineMore />}
          onClick={toggleDropdown3}
          hasDropdown={false}
        />
      </div>
    </div>
  );
};

export default TopButtons;

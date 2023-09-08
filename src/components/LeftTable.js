import React from "react";
import EmailOption from "./EmailOption";
import Label from "./Label";
import Chat from './Chat'
import {
  FaRegPaperPlane,
} from "react-icons/fa";
import { AiOutlineInbox,AiOutlineStar, AiOutlineExclamationCircle, AiOutlineRedEnvelope, AiOutlineDelete, AiFillRightCircle } from "react-icons/ai";
const LeftTable = () => {
  return (
    <div className="w-auto border-2 border-gray-100 p-3">
      {/* Compose button */}
      <button className="btn w-full bg-red-500 border-transparent text-white shadow-md shadow-red-200 mb-4px-4 py-2 mt-4 rounded-md">
        Compose
      </button>
      {/* Email options */}
      <div className="mt-6 mx-2">
        <div className="mt-2">
          <EmailOption icon={<AiOutlineInbox className="mr-2"/>} name="Inbox" count={18} isActive={true}/>
          <EmailOption icon={<AiOutlineStar className="mr-2"/>} name="Starred" count={3} isActive={false}/>
          <EmailOption
            icon={<AiOutlineExclamationCircle className="mr-2"/>}
            name="Important"
            count={7}
            isActive={false}
          />
          <EmailOption icon={<AiOutlineRedEnvelope className="mr-2"/>} name="Draft" count={2} isActive={false}/>
          <EmailOption icon={<FaRegPaperPlane className="mr-2"/>} name="Sent Mail" count={10} isActive={false}/>
          <EmailOption icon={<AiOutlineDelete className="mr-2"/>} name="Trash" count={0} isActive={false}/>
        </div>
      </div>

      {/* Labels */}
      <div className="mt-6 mx-2">
        <p className="text-gray-600 font-semibold">Labels</p>
        <div className="mt-2">
          <Label icon={<AiFillRightCircle color="red"/>} text="Theme" />
          <Label icon={<AiFillRightCircle color="blue"/>} text="Freelance" />
          <Label icon={<AiFillRightCircle color="green"/>} text="Social" />
          <Label icon={<AiFillRightCircle color="purple"/>} text="Friends" />
          <Label icon={<AiFillRightCircle color="yellow"/>} text="Family" />
        </div>
      </div>

      {/* Chat */}
      <div className="mt-6 mx-2">
    <p className="text-gray-600 font-semibold">Chat</p>
     <Chat src="https://via.placeholder.com/50" name="Abhishek" />
     <Chat src="https://via.placeholder.com/50" name="Kunal" />
     <Chat src="https://via.placeholder.com/50" name="Krishna" />
     <Chat src="https://via.placeholder.com/50" name="Ravi" />
     </div>
    </div>
  );
};

export default LeftTable;

import React from 'react'

function Chat({ src, name}) {
  return (
    <div className="mt-2">
      <div className="flex items-center">
        <img
          src={src}
          alt="Profile"
          className="w-8 h-8 rounded-full mr-2"
        />
        <span className=" font-serif opacity-90 cursor-pointer hover:bg-gray-300">{name}</span>
      </div>
  </div>
  )
}

export default Chat
import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { RiMessage3Fill } from "react-icons/ri";

const ChatList = ({ data }) => {
  return (
    <div>
      <header className="text-base text-navy pb-4 flex gap-1">
        <RiMessage3Fill className="my-auto" /> <strong>{data.length}</strong>Ucapan & Doa
      </header>
      <main className="max-h-[25rem] overflow-auto">
        {data.map((chat, i) => (
          <div key={i} className="Chat-box">
            <h1 className="text-navy font-semibold text-lg">
              {chat.name} <span className="bg-gold py-1 px-2 rounded-lg text-xs text-stone-200 font-normal tracking-wider">{chat.absent}</span>
            </h1>
            <small className="text-stone-600 flex gap-1 mb-2">
              <BiTimeFive className="my-auto" /> {chat.created_at}
            </small>

            <p className="text-navy text-base tracking-wide">{chat.message}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ChatList;

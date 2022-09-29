import React from "react";

const Cover = ({ to }) => {
  return (
    <div className="flex flex-col justify-end text-center">
      <h5 className="text-2xl mb-4 text-stone-400">Hello, You're Invited</h5>
      <h2 className="text-3xl text-stone-300 w-full">The Wedding</h2>
      <h1 className="text-7xl font-caveat text-stone-300 w-full">Ardi & Yuli</h1>
      <hr className="w-40 mt-2 mx-auto border-2 rounded border-gold" />
      <p className="text-stone-300 mt-4">10 - 09 - 2025</p>

      <div className="bg-navy py-4 px-6 w-fit max-w-[15rem] mx-auto my-4 rounded-xl shadow-lg">
        <p className="text-base text-stone-400 font-semibold">Kepada Yth</p>
        <p className="text-base text-stone-400 mb-4">Bapak/Ibu/Saudara/i</p>
        <div className=" text-3xl font-caveat text-gold">{to}</div>
      </div>
    </div>
  );
};

export default Cover;

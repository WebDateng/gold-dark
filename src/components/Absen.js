import React from "react";
import ChatList from "./ChatList";
import Form from "./Form";

const Absen = () => {
  return (
    <div className="Absensi">
      <h1 className="text-center text-gold text-4xl font-caveat">Ucapan & Doa</h1>
      <p className="text-center text-stone-400">Untuk Kami yang Berbahagia</p>
      <hr className="w-40 mt-2 mx-auto border-2 rounded border-gold mb-4" />

      <Form />
    </div>
  );
};

export default Absen;

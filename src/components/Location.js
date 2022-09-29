import React, { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import Protokol from "../assets/images/prokes.jpg";
import Penutup from "../assets/images/santih.png";
import { BsFillInfoCircleFill } from "react-icons/bs";

const Location = () => {
  const [display, setDisplay] = useState(false);

  const Toogle = () => {
    setDisplay(!display);
  };
  return (
    <div className="Location py-20 px-3 text-center">
      <h1 className="text-center text-4xl font-caveat text-gold">Lokasi Acara</h1>
      <hr className="w-40 mt-2 mx-auto border-2 rounded border-gold" />

      <div className="Google-maps my-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126214.40479545371!2d115.15423239672026!3d-8.672507212519509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409b0e5e80db%3A0xe27334e8ccb9374a!2sDenpasar%2C%20Kota%20Denpasar%2C%20Bali!5e0!3m2!1sid!2sid!4v1664372761297!5m2!1sid!2sid"
          className="w-full h-96 my-6"
        ></iframe>
        <a href="https://goo.gl/maps/7ZixvPxUDmPjuvCs9" target="_blank" rel="noopener noreferrer" className="py-4 rounded-md text-center bg-gold flex">
          <div className="mx-auto flex flex-row text-lg">
            <MdLocationPin className="my-auto" size={20} /> Google Maps
          </div>
        </a>
      </div>

      <p className="text-base text-stone-400">Acara ini diselenggarakan dengan mematuhi protokol pencegahan penyebaran COVID-19 dan bagi tamu undangan diharapkan dapat mengikutinya.</p>

      <button onClick={Toogle} className="bg-red-600 text-stone-300 py-2 px-8 rounded-md my-8">
        <div className="mx-auto flex flex-row text-md gap-4">
          <BsFillInfoCircleFill className="my-auto" size={20} /> Protokol Kesehatan COVID-19
        </div>
      </button>

      <img src={Protokol} alt="Prokes" className={`rounded-md origin-top transition-all duration-500 ease-in-out ${display ? "scale-1 h-full" : "scale-0 h-0"} mb-8`} />

      <p className="text-base text-stone-400">Atas kehadiran serta doa restunya, kami sekeluarga mengucapkan terima kasih</p>

      <img src={Penutup} alt="Salam Pembuka" className="w-60 mt-8 mx-auto" />
    </div>
  );
};

export default Location;

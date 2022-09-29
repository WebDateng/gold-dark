import React from "react";
import Pembuka from "../assets/images/swastyastu.png";
import Male from "../assets/images/Male.jpg";
import Female from "../assets/images/Female.jpg";
import { FaHeart } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="Profile text-center py-20 px-3">
      <img src={Pembuka} alt="Salam Pembuka" className="w-28 mx-auto" />
      <p className="text-base mt-4 text-stone-400">Atas Asung Kerta Wara Nugraha Ida Sang Hyang Widhi Wasa/Tuhan Yang Maha Esa, Kami bermaksud mengundang Bapak/Ibu/Saudara/i, pada acara Manusa Yadnya Pawiwahan (Pernikahan) putra-putri kami:</p>

      <div className="Pengantin pt-8 flex flex-col gap-10">
        {/* Male */}
        <div>
          <img data-aos="fade-up" src={Male} alt="Male" className="rounded-full w-72 border-4 border-gold mx-auto shadow-lg" />

          <div data-aos="fade-up">
            <h2 className="text-gold text-3xl font-caveat mt-4">Made Ardi Wiguna, S.Kom.</h2>
            <hr className="w-40 mx-auto my-2 border-2 rounded border-gold" />
            <p className="w-52 mx-auto text-stone-400">
              Putra Kedua Dari Pasangan <strong>Bapak Adi</strong> & <strong>Ibu Dina</strong>
            </p>
          </div>
        </div>

        <FaHeart className="mx-auto fill-gold" size={60} />

        {/* Female */}
        <div>
          <img data-aos="fade-up" src={Female} alt="Female" className="rounded-full w-72 border-4 border-gold mx-auto shadow-lg" />

          <div data-aos="fade-up">
            <h2 className="text-gold text-3xl font-caveat mt-4">Putu Yuli Putri</h2>
            <hr className="w-40 mx-auto my-2 border-2 rounded border-gold" />
            <p className="w-52 mx-auto text-stone-400">
              Putra Kedua Dari Pasangan <strong>Bapak Bagus</strong> & <strong>Ibu Asih</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

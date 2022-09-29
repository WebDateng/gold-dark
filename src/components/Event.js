import React, { useEffect, useRef, useState } from "react";
import { BsCalendar3 } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";

const Event = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const setDate = new Date("Sep 10, 2025 18:50:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = setDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <div className="Event flex flex-col text-center py-20 gap-6 px-3">
      <p className="text-base text-stone-400">Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai pada:</p>

      <div data-aos="fade-right" className="Card">
        <h1 className="text-3xl font-caveat text-gold">Pawiwahan</h1>
        <hr className="w-40 mt-2 mx-auto border-2 rounded border-gold" />
        <div className="text-stone-400 mt-4 flex flex-col gap-2">
          <p className="flex gap-2 mx-auto">
            <BsCalendar3 className="my-auto" size={20} /> <span> Selasa, 08 Juli 2030</span>
          </p>
          <p className="flex gap-2 mx-auto">
            <BiTimeFive className="my-auto" size={25} /> <span> 08.00 - 15.00 WITA</span>
          </p>
          <p className="flex gap-2 mx-auto">
            <MdLocationPin className="my-auto" size={25} /> <span> Jalan Kasih Sayang Denpasar</span>
          </p>
        </div>
      </div>

      <div data-aos="fade-left" className="Card">
        <h1 className="text-3xl font-caveat text-gold">Resepsi</h1>
        <hr className="w-40 mt-2 mx-auto border-2 rounded border-gold" />
        <div className="text-stone-400 mt-4 flex flex-col gap-2">
          <p className="flex gap-2 mx-auto">
            <BsCalendar3 className="my-auto" size={20} /> <span> Selasa, 08 Juli 2030</span>
          </p>
          <p className="flex gap-2 mx-auto">
            <BiTimeFive className="my-auto" size={25} /> <span> 19.00 WITA - Selesai</span>
          </p>
          <p className="flex gap-2 mx-auto">
            <MdLocationPin className="my-auto" size={25} /> <span> Jalan Kasih Sayang Denpasar</span>
          </p>
        </div>
      </div>

      <div className="Date mt-6">
        <h1 className="text-4xl font-caveat text-gold">Save The Date</h1>
        <hr className="w-40 mt-2 mx-auto border-2 rounded border-gold" />

        <div data-aos="fade-up" className="Countdown flex flex-wrap gap-y-8 mt-4">
          <div className="Time-card mx-auto">
            <h1 className="font-caveat text-5xl text-gold">{timerDays}</h1>
            <p className="text-stone-400 text-base">Hari</p>
          </div>
          <div className="Time-card mx-auto">
            <h1 className="font-caveat text-5xl text-gold">{timerHours}</h1>
            <p className="text-stone-400 text-base">Jam</p>
          </div>
          <div className="Time-card mx-auto">
            <h1 className="font-caveat text-5xl text-gold">{timerMinutes}</h1>
            <p className="text-stone-400 text-base">Menit</p>
          </div>
          <div className="Time-card mx-auto">
            <h1 className="font-caveat text-5xl text-gold">{timerSeconds}</h1>
            <p className="text-stone-400 text-base">Detik</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;

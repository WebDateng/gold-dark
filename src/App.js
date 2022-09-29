import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Cover from "./components/Cover";
import Event from "./components/Event";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Profile from "./components/Profile";
import { BsEnvelopeOpen } from "react-icons/bs";
import Gallery from "./components/Gallery";
import Absen from "./components/Absen";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search).get("to");
    setSearch(queryParams);
  });

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div>
      {isOpen ? (
        <div>
          <Hero />
          <Profile />
          <Event />
          <Location />
          <Gallery />
          <Absen />
          <Footer />
        </div>
      ) : (
        <div className="Banner flex flex-col justify-end py-20">
          <Cover to={search} />
          <button onClick={() => setIsOpen(true)} className="bg-gold w-fit py-4 px-6 rounded-lg mx-auto mt-8">
            <div className="mx-auto flex flex-row text-md gap-4">
              <BsEnvelopeOpen className="my-auto" size={20} /> Buka Undangan
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;

import React from "react";
import Img1 from "../assets/images/1.jpg";
import Img2 from "../assets/images/2.jpg";
import Img3 from "../assets/images/3.jpg";
import Img4 from "../assets/images/4.jpg";

const Gallery = () => {
  return (
    <div className="Gallery">
      <h1 className="text-center text-gold text-4xl font-caveat">Galery Photo</h1>
      <hr className="w-40 mt-2 mx-auto border-2 rounded border-gold" />

      <div className="flex flex-wrap gap-4 [&>img]:rounded-md my-4">
        <img src={Img1} alt="Photo 1" data-aos="fade-up" />
        <img src={Img2} alt="Photo 2" data-aos="fade-up" />
        <img src={Img3} alt="Photo 3" data-aos="fade-up" />
        <img src={Img4} alt="Photo 4" data-aos="fade-up" />
      </div>
    </div>
  );
};

export default Gallery;

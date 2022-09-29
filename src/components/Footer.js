import React from "react";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="Footer">
      <h1 className="text-navy font-semibold flex justify-center">
        Made With <AiFillHeart className="my-auto mx-1 fill-red-700" /> In Indonesia |{" "}
        <a href="https://webdateng.github.io/webdateng" target="_blank" rel="noreferer" className="ml-2 underline">
          WebDateng
        </a>
      </h1>
    </div>
  );
};

export default Footer;

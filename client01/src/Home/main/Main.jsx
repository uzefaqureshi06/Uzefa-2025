import React, { useState } from "react";
import bg from "../main/bg (1).mp4";
import big from "../main/1.png";
import Flipbook from "../flipbook/Flip";
import Image from "../imageGallery/Image";

const Main = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <>
      {/* ✅ Load Fonts Inside JSX ✅ */}
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap");
          @import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap");
       
       .bold{
        font-family: "Dancing Script", cursive;
       }
       `}
      </style>

      {!videoLoaded && (
        <div className="flex justify-center items-center h-screen w-screen bg-black">
          {/* ✅ Loader Screen (only until video loads) ✅ */}
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      )}

      <div
        className={`relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden ${
          !videoLoaded ? "hidden" : ""
        }`}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source src={bg} type="video/mp4" />
        </video>

        {/* Header */}
        <header className="absolute w-full text-center text-white z-10 px-4 top-20">
          <h1 className="text-[3rem] md:text-6xl font-extrabold tracking-wide neon-glow">
            Live Blogger
          </h1>

          <h2 className=" bold text-4xl md:text-6xl mt-4 md:mt-6 font-bold neon-text animate-float font-dancing">
  My <span className="text-red-500">Vlogs</span>, Your Journey.
</h2>


          <img
            src={big}
            alt="Big Visual"
            className="mt-6 w-24 md:w-48 lg:w-64 h-auto animate-fadeInUp mx-auto"
          />
        </header>

        {/* Flipbook */}
        <div className="absolute bottom-24 flex justify-center w-full z-10 px-4">
          <Flipbook />
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4 md:space-x-6 text-white text-xl md:text-3xl z-10">
          <a href="#" className="hover:text-red-500 transition duration-300 animate-glow">
            <i className="bx bxl-pinterest"></i>
          </a>
          <a href="#" className="hover:text-blue-500 transition duration-300 animate-glow">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#" className="hover:text-pink-500 transition duration-300 animate-glow">
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
      </div>

      {/* Image Gallery (Below the Main Section) */}
      {videoLoaded && <Image />}
    </>
  );
};

export default Main;

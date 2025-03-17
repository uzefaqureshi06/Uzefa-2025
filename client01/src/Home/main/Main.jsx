import React from "react";
import bg from "../main/bg (1).mp4";
import big from "../main/1.png";
import Flipbook from "../flipbook/Flip";
import { Navbar } from "../navbar/Navbar";

const Main = () => {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* External Fonts & Icons */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-screen h-screen object-cover"
      >
        <source src={bg} type="video/mp4" />
      </video>

<Navbar/>

      <header className="absolute w-screen text-center text-white z-10 px-4 top-20">
        <h1
          className="text-5xl md:text-7xl font-extrabold tracking-wide neon-glow"
          style={{ fontFamily: "'Ubuntu', sans-serif", fontWeight: "700" }}
        >
          Live Blogger
        </h1>

        <h2
          className="text-4xl md:text-6xl mt-6 md:mt-10 font-bold neon-text animate-float"
          style={{ fontFamily: "'Dancing Script', cursive", fontWeight: "700" }}
        >
          My{" "}
          <span
            className="text-red-500"
            style={{ fontFamily: "'Dancing Script', cursive", fontWeight: "700" }}
          >
            Vlogs
          </span>
          , Your Journey.
        </h2>

        <img
          src={big}
          alt="Big Visual"
          className="mt-6 lg:mt-[-6%] mx-auto w-4 md:w-72 h-auto animate-fadeInUp"
        />
      </header>

      {/* ✅ Flipbook Positioned Correctly ✅ */}
      <div className="absolute bottom-24 flex justify-center w-full z-10">
        <Flipbook />
      </div>
<br></br>
<br></br>
      {/* Social Icons */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-6 text-white text-3xl z-10">
        <a
          href="#"
          className="social-icon hover:text-red-500 transition duration-300 animate-glow"
        >
          <i className="bx bxl-pinterest"></i>
        </a>
        <a
          href="#"
          className="social-icon hover:text-blue-500 transition duration-300 animate-glow"
        >
          <i className="bx bxl-facebook"></i>
        </a>
        <a
          href="#"
          className="social-icon hover:text-pink-500 transition duration-300 animate-glow"
        >
          <i className="bx bxl-instagram"></i>
        </a>
      </div>
    </div>
  );
};

// Profile Menu Component
function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center p-2 rounded-full border border-gray-300"
      >
        <img
          className="w-8 h-8 rounded-full"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=1480&q=80"
          alt="User"
        />
      </button>
      {isMenuOpen && (
        <div className="absolute right-0 mt-5 w-48 bg-white border rounded-lg shadow-lg">
          <ul>
            {["My Profile", "Edit Profile", "Inbox", "Help", "Sign Out"].map(
              (item, index) => (
                <li
                  key={index}
                  className={`p-2 cursor-pointer hover:bg-gray-200 ${
                    index === 4 ? "text-red-500" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Main;

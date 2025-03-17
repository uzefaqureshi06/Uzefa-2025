import React from "react";
import './Navbar.css';

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
            {["All BLogs", "Add Blogs", "SignIn", "Help", "Sign Out"].map(
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

export function Navbar() {

  return (
 <>
       <nav className="absolute top-0 left-0 w-screen flex justify-between items-center px-5 py-2 bg-white/10 backdrop-blur-md z-10 ">
        <span
          className="text-3xl font-bold text-white"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Uzefa.
        </span>

        <div className="flex items-center space-x-4">
          <button className="md:hidden p-2 text-white">☰</button>
          <ProfileMenu />
        </div>
      </nav>
 </>
  );
}

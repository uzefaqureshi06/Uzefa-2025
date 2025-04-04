import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const localData = JSON.parse(localStorage.getItem("profile"));
  console.log(localData,"This is local Data")
  console.log(localData?.user?.avatar,"This is local Data image")
  const isLoggedIn = localData?.user;

  const handleAuthAction = () => {
    if (isLoggedIn) {
      localStorage.removeItem("profile");
      window.location.reload(); // Reload only when logging out
    } else {
      navigate("/auth"); // Navigate to auth without reloading
    }
  };
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-70 backdrop-blur-md shadow-lg text-white z-50 px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <NavLink to="/" className="text-3xl font-extrabold text-white transition-transform hover:scale-110">
        Uzefa.
      </NavLink>

      {/* Avatar Dropdown Menu */}
      <div className="relative hidden md:block" ref={menuRef}>
        <button className="flex items-center space-x-2" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={localData?.user?.avatar} alt="Profile" className="w-10 h-10 rounded-full border-2 border-blue-400 shadow-lg hover:shadow-blue-500 transition duration-300" />
       
        </button>
        
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-lg shadow-lg py-3 flex flex-col">
            <NavLink to="/allBlogs" className="w-full px-4 py-2 hover:bg-gray-700" onClick={() => setMenuOpen(false)}>
              <i className='bx bx-search-alt-2 mr-2'></i> All Blogs
            </NavLink>
            <NavLink to="/profile" className="w-full px-4 py-2 hover:bg-gray-700" onClick={() => setMenuOpen(false)}>
              <i className='bx bx-user mr-2'></i> Profile
            </NavLink>

            <button
              className="w-full text-left px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-b-lg flex items-center"
              onClick={handleAuthAction}
            >
              <i className={`bx ${isLoggedIn ? "bx-log-out" : "bx-log-in"} mr-2`}></i>
              {isLoggedIn ? "Logout" : "Sign In"}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <i className='bx bx-x'></i> : <i className='bx bx-menu'></i>}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 right-4 bg-gray-800 text-white rounded-lg shadow-lg w-48 py-3 flex flex-col items-start"
        >
          <NavLink to="/allBlogs" className="w-full px-4 py-2 hover:bg-gray-700" onClick={() => setMenuOpen(false)}>
            <i className='bx bx-search-alt-2 mr-2'></i> All Blogs
          </NavLink>
          <NavLink to="/profile/:userId" className="w-full px-4 py-2 hover:bg-gray-700" onClick={() => setMenuOpen(false)}>
            <i className='bx bx-user mr-2'></i> Profile
          </NavLink>

          {/* Auth Button */}
          <button
            className="w-full text-left px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-b-lg flex items-center"
            onClick={handleAuthAction}
          >
            <i className={`bx ${isLoggedIn ? "bx-log-out" : "bx-log-in"} mr-2`}></i>
            {isLoggedIn ? "Logout" : "Sign In"}
          </button>
        </div>
      )}
    </nav>
  );
}


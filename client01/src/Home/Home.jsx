import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./main/Main";
import { Navbar } from "../Home/navbar/Navbar";
import Search from "../Home/search/Search";
import Card from "../Home/card/Card";
import Image from "../Home/imageGallery/Image";
import Auth from "../Home/sign/Auth";
const Home = () => {
  return (
    
    <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Main />} />
        <Route path="/image" element={<Image />} />
        <Route path="/search" element={<Search />} />
        <Route path="/card" element={<Card />} />
      </Routes>
  
  );
};

export default Home;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./main/Main";
import { Navbar } from "../Home/navbar/Navbar";
import Search from "../Home/search/Search";
import Card from "../Home/card/Card";
import Image from "../Home/imageGallery/Image";
import Auth from "../Home/sign/Auth";
import { Navigate } from "react-router-dom";
import Profile from "./profile/Profile";
import Add from "./AddCard/Add";
import Blog from "./search/Blog";
import CommunityProfile from "./navbar/CoummunityProfile";
const Home = () => {
  const profile=JSON.parse(localStorage.getItem("profile"));
  let isAuthenticated;
  if(profile==null){
    isAuthenticated=false;
  }else{
    isAuthenticated=TransformStreamDefaultController
  }


  return (
    <>
      <Navbar/>
    <Routes>
        <Route  path="/auth" element={!isAuthenticated?<Auth />:<Navigate to="/"/>}
         />
        <Route path="/" element={<Main />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/allBlogs" element={<Search />} />
        <Route path="/add" element={<Add />} />
        <Route path="/card" element={<Card />} />
        <Route path="/communityProfile" element={<CommunityProfile/>} />
        <Route path="/blog/:id" element={<Blog />} /> 
      </Routes>
  </>
  );
};

export default Home;

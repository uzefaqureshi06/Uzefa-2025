import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from '../card/Card';

const CategoryFilter = () => {
  return (
    <>
      <div className="flex flex-col items-center px-4 py-16 w-full mt-[2rem]">
        {/* 🔹 Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
      </div>
      <Card />
    </>
  );
};

export default CategoryFilter;

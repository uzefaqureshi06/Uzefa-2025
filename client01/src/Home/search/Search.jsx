import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/action/category";

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState("All");
const dispatch=useDispatch();
const categories = useSelector((state) => state.category);
console.log(categories)
useEffect(()=>{
dispatch(getAllCategory())
},[])  
  return (
    <div className="flex flex-col items-center p-4 w-full h-[28vh]">
      <input
        type="text"
        placeholder="Search..."
        className="w-[43rem]  p-2 border border-gray-300 rounded-md mb-4"
      />

      <div className="flex flex-wrap justify-center gap-3">
        {categories?.length > 0 ? (
          categories?.map((cat) => (
            <button
              key={cat._id}
              className={`px-4 py-2 rounded-md transition ${
                activeCategory === cat.categoryName
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setActiveCategory(cat.categoryName)}
            >
              {cat.categoryName}
            </button>
          ))
        ) : (
          <p>Loading categories...</p>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;

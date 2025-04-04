import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../../redux/action/blog";
import { useLocation, useNavigate } from "react-router-dom";

// const categories = [
//   "All", "Travel", "Cooking", "Business", "Science", 
//   "Bitcoin", "GYM", "Entertainment", "Health", "DIY", "Technology"
// ];

const CardList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    dispatch(getAllBlogs()); // Fetch blogs once when component mounts
  }, [dispatch]);

  useEffect(() => {
    const category = queryParams.get("category") || "All";
    setSelectedCategory(category);

    // Only filter when blogs exist
    if (blogs.length > 0) {
      if (category === "All") {
        setFilteredData(blogs);  // Show all blogs when "All" is selected
      } else {
        const filtered = blogs.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        );
        setFilteredData(filtered);
      }
    }
  }, [blogs, search]); // Ensure it only runs when blogs or URL search params change

  const handleClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* 🔹 Category Tabs */}
      {/* <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
        {categories.map((cat) => (
          <button 
            key={cat} 
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 md:px-5 md:py-3 rounded-lg font-semibold transition-all duration-300 
              ${selectedCategory === cat ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg transform scale-105" : "bg-gray-800 hover:bg-gray-700"}
              text-white`}
          >
            {cat}
          </button>
        ))}
      </div> */}

      {/* 🔹 Blog Cards (Filtered Data) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((blog) => (
            <div 
              key={blog._id} 
              onClick={() => handleClick(blog._id)}
              className="bg-gray-900 p-5 rounded-lg shadow-lg border border-gray-700 hover:border-gray-500 transition-all duration-300 transform cursor-pointer"
            >
              {/* ✅ User Avatar & Name */}
              <div className="flex items-center space-x-3">
                <img 
                  src={blog.auth?.avatar || `https://ui-avatars.com/api/?name=${blog.auth?.name || "User"}&background=random`} 
                  alt="User Avatar" 
                  className="w-10 h-10 rounded-full border border-gray-500 shadow-md"
                />
                <span className="text-white text-lg font-semibold">{blog.auth?.name || "User"}</span>
                <div className="ml-auto">
                  <button className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-transparent bg-gray-900 shadow-md transition-all duration-300 
                    hover:scale-110 hover:border-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500">
                    <i className="bx bxs-right-arrow-circle text-white text-xl"></i>
                  </button>
                </div>
              </div>

              {/* Blog Image */}
              <img 
                src={blog.image || "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"} 
                alt={blog.title} 
                className="w-full h-52 rounded-lg object-cover mt-4"
              />

              {/* Blog Content */}
              <h2 className="text-xl font-semibold mt-4 text-white line-clamp-2">
                {blog.title}
              </h2>
              <p className="mt-2 text-gray-400 text-md line-clamp-3">
                {blog.content}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-xl text-center">No blogs found in this category...</p>
        )}
      </div>
    </div>
  );
};

export default CardList;

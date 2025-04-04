import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsByAuthorId } from "../../redux/action/blog";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById } from "../../redux/action/auth";

export default function CommunityProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();
  console.log(userId, "This is user ID");
  const user = useSelector((state) => state?.auth?.singleUser || []);
  const blogs = useSelector((state) => state.blog.blogs || []);
  console.log(blogs, "This are blogs");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      dispatch(getBlogsByAuthorId(userId));
      dispatch(getUserById(userId));
    }
  }, []);

  useEffect(() => {
    if (blogs) {
      setLoading(false);
    }
  }, [blogs]);

  return (
    <>
      <div className="w-full p-6 bg-black shadow-lg rounded-lg">
        {/* Banner & Profile Pic */}
        <div className="relative">
          <img
            src="https://img.freepik.com/free-vector/half-tone-blue-abstract-background-with-text-space_1017-41428.jpg"
            alt="Banner"
            className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
          />
          <div className="absolute inset-x-0 -bottom-12 flex justify-center">
            <img
              src={user.avatar || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-20 sm:w-24 h-20 sm:h-24 rounded-full border-4 border-black shadow-md"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="text-center mt-14">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {user.name || "User"}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            {user.email || "No email provided"}
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-6 text-center">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {blogs.length}+
            </h3>
            <p className="text-gray-400">Blogs</p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">25+</h3>
            <p className="text-gray-400">Followers</p>
          </div>
        </div>

        {/* Blogs Section */}

        <div className="mt-8 flex items-center  ">
          {loading ? (
            // 🔹 Loader Animation
            <div className="flex justify-center mt-8">
              <div className="w-10 sm:w-12 h-10 sm:h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : blogs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative">
              {blogs.map((item) => (
                <div
                  key={item._id}
                  className="border p-4 rounded-lg shadow-md bg-gray-900 w-full max-w-[350px] h-[420px]  relative flex flex-col"
                >
                  <img
                    src={item.image || "https://via.placeholder.com/300"}
                    alt={item.title}
                    className="w-full h-[180px] sm:h-[200px] object-cover rounded-lg"
                  />
                  <h2 className="text-sm sm:text-[15px] font-bold text-white mt-3 line-clamp-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-400 text-xs sm:text-sm mt-2 line-clamp-3 flex-grow">
                    {item.content.substring(0, 120)}...
                  </p>
                  {/* 🔹 Fixed Button Positioning at Bottom */}
                  <div className="absolute bottom-4 right-0 transform -translate-x-1/2">
                    <button
                      onClick={() => navigate(`/blog/${item._id}`)}
                      className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-full border-2 border-transparent bg-gray-900 shadow-md transition-all duration-300 
                       hover:scale-110 hover:border-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500"
                    >
                      <i className="bx bxs-right-arrow-circle text-white text-2xl"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400 mt-4">No blogs found.</p>
          )}
        </div>
      </div>
    </>
  );
}

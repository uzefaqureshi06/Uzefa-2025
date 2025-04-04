import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../redux/action/auth";
import { useNavigate } from "react-router-dom";
import { getBlogsByAuthorId } from "../../redux/action/blog";

const Community = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const localData = JSON.parse(localStorage.getItem("profile")) || {};
  const user = localData?.savedUser || {};

  const users = useSelector((state) => state.auth.users);
  const blogs = useSelector((state) => state.blog.authorBlogs);

  useEffect(() => {
    if (!users || users.length === 0) {
      dispatch(fetchAllUsers());
    }
  }, [dispatch]);

  useEffect(() => {
    if (user?._id) {
      dispatch(getBlogsByAuthorId(user._id));
    }
  }, [dispatch, user?._id]);

  const handleClick = (userId) => {
    navigate(`/userProfile/${userId}`);
  };

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        Our Community
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-7xl mb-8">
        {users && users.length > 0 ? (
          users?.slice(0, 4).map((item) => (
            <div
              key={item._id}
              className="bg-black border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 
                        p-4 flex flex-col items-center text-center transition-all transform hover:bg-gray-900"
            >
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={item.avatar || "https://via.placeholder.com/150"}
                alt={item.name}
              />
              <h5 className="text-xl font-medium text-gray-200">{item.name}</h5>
              <span className="text-sm text-gray-500">{item.email}</span>
              <button
                onClick={() => handleClick(item._id)}
                className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg 
                          hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Details
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No User found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Community;

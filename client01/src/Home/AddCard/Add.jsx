import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/action/category";
import { createBlog } from "../../redux/action/blog";

const Add = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category);
  const localData = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !image || !category || !content) {
      console.error("All fields are required!");
      return;
    }
    const formData = {
      title,
      image,
      category,
      auth: localData?.user?._id,
      content,
    };

    console.log(formData , "This is FormData")
    dispatch(createBlog(formData))
      .then(() => console.log("Blog Added Successfully!"))
      .catch((error) => console.error("Error adding blog:", error));
    setTitle("");
    setImage("");
    setCategory("");
    setContent("");
  };

  return (
    <div className="bg-black flex items-center justify-center min-h-screen p-4">
      <form
        onSubmit={handleSubmit}
        className="p-6 sm:p-8 rounded-lg shadow-lg border border-gray-800 backdrop-blur-lg bg-opacity-30 bg-gray-900 text-white w-full max-w-lg"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          Create Blog Post
        </h2>

        {/* Category Selection */}
        <div className="mb-4 sm:mb-6">
          <label className="block font-bold mb-2">Category</label>
          <select
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            {categories && categories.length > 0 ? (
              categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.categoryName}
                </option>
              ))
            ) : (
              <option disabled>Loading categories...</option>
            )}
          </select>
        </div>

        {/* Title */}
        <div className="mb-4 sm:mb-6">
          <label className="block font-bold mb-2">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter Blog Title"
          />
        </div>

        {/* Image URL */}
        <div className="mb-4 sm:mb-6">
          <label className="block font-bold mb-2">Image URL</label>
          <input
            value={image}
            type="text"
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Enter Image URL"
          />
        </div>

        {/* Blog Content */}
        <div className="mb-4 sm:mb-6">
          <label className="block font-bold mb-2">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter Blog Content"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-bold rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;

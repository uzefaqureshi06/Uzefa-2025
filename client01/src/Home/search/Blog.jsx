import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBlogsByID } from "../../redux/action/blog.js";

const Blog = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const blog = useSelector((state) => state.blog.singleBlog);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getBlogsByID(id)).then(() => setLoading(false));
    }, [dispatch, id]);

    return (
        <div className="max-w-5xl mt-[7rem] mx-auto p-6 bg-black text-white rounded-lg transition-opacity duration-500 ease-in-out">
            {loading ? (
                <div className="flex justify-center items-center h-40">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
                </div>
            ) : (
                <>
                    <img src={blog.image || "https://via.placeholder.com/400"} className="w-full h-72 object-cover rounded-lg" />
                    <h1 className="text-2xl font-bold mt-4">{blog.title}</h1>
                    <p className="text-gray-400 text-sm mt-1">By {blog.auth?.name || "Unknown"}</p>
                    <p className="mt-4">{blog.content}</p>
                </>
            )}
        </div>
    );
};

export default Blog;

import * as api from '../api/blog.js';
import axios from "axios";
import { CREATE_BLOGS, DELETE_BLOGS, FETCH_ALL_BLOGS, GET_AUTHOR_BLOGS, FETCH_BLOGS_BY_ID,FETCH_AUTHOR_BLOGS_SUCCESS } from '../constants/actionTypes.js';

// ✅ Create Blog
export const createBlog = (blogData) => async (dispatch) => {
    try {
        const { data } = await api.createBlog(blogData);
        console.log("Created Blog:", data);
        dispatch({ type: CREATE_BLOGS, payload: data }); // ✅ Update Redux directly
    } catch (error) {
        console.error("Error creating blog:", error.response?.data || error.message);
    }
};
export const getAllBlogs = (category = "") => async (dispatch) => {
    try {
        console.log("Fetching blogs for category:", category);
        const { data } = await api.fetchBlogs(category);  // ✅ Pass correct parameter

        console.log("Fetched Blogs:", data);
        dispatch({ type: FETCH_ALL_BLOGS, payload: data });
    } catch (error) {
        console.error("Error fetching blogs:", error.response?.data || error.message);
    }
};

export const getBlogsByAuthorId = (authorId) => async (dispatch) => {
    try {
        const { data } = await api.fetchBlogsByAuthor(authorId); // Call API
       console.log(data)
        dispatch({ type: GET_AUTHOR_BLOGS, payload: data }); // Dispatch to reducer
    } catch (error) {
        console.error("Error fetching blogs:", error);
    }
};

// ✅ Fetch Blog By ID (Fixing Dispatch Structure)
export const getBlogsByID = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchBlogsByID(id);
        console.log("Fetched Single Blog:", data);

        dispatch({ type: FETCH_BLOGS_BY_ID, payload: data.blog || data }); // ✅ Ensure correct structure
    } catch (error) {
        console.error("Error fetching blog by ID:", error.response?.data || error.message);
    }
};

// ✅ Delete Blog
export const deleteBlog = (id) => async (dispatch) => {
    try {
        await api.deleteBlog(id);
        dispatch({ type: DELETE_BLOGS, payload: id });

        console.log("Deleted Blog ID:", id);
    } catch (error) {
        console.error("Error deleting blog:", error.response?.data || error.message);
    }
};

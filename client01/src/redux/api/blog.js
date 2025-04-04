import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:8000" });

export const createBlog = (blogData) => API.post("/api/v1/blog", blogData);
export const fetchBlogs = (title = "") => API.get(`/api/v1/blog?title=${title}`);  // ✅ Fixed query param
export const fetchBlogsByID = (id) => API.get(`/api/v1/blog/${id}`);
export const deleteBlog = (id) => API.delete(`/api/v1/blog/${id}`);
export const fetchBlogsByAuthor = (authorId) => API.get(`/api/v1/blog/${authorId}`);

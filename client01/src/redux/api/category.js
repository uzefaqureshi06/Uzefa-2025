import axios from 'axios'

const API = axios.create({baseURL:"https://uzefa-server-2026.onrender.com"});

// export const createUser =(user)=>API.post("/user",user)
export const fetchCategories=()=>API.get("/api/v1/category");
export const getCategoryId = (id) => API.get(`/api/v1/category/${id}`);
// export const deleteUser =(id)=>API.delete(`/user/users/${id}`);
// export const updateUser=(id,updateUser)=>API.put(`/user/${id}`,updateUser)
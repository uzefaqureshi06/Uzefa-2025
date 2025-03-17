import axios from 'axios'

const API = axios.create({baseURL:"http://localhost:8000"});

// export const createUser =(user)=>API.post("/user",user)
export const fetchCategories=()=>API.get("/api/v1/category");
// export const deleteUser =(id)=>API.delete(`/user/users/${id}`);
// export const updateUser=(id,updateUser)=>API.put(`/user/${id}`,updateUser)
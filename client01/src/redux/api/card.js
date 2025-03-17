import axios from 'axios'

const API = axios.create({baseURL:"http://localhost:8000"});

export const createCard =(card)=>API.post("/api/v1/card",card)
export const fetchCard=()=>API.get("/api/v1/card");
// export const deleteUser =(id)=>API.delete(`/user/users/${id}`);
// export const updateUser=(id,updateUser)=>API.put(`/user/${id}`,updateUser)
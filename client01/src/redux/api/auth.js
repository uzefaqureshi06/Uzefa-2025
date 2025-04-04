import axios from "axios"

const API = axios.create({ baseURL: "https://uzefa-server-2026.onrender.com" });

export const signup = (data) => API.post("/users/signup", data)
export const signin = (data) => API.post("/users/signin", data)
export const fetchAllUsers = () => API.get("/users/user");
export const getUserById = (userId) => API.get(`/users/${userId}`);
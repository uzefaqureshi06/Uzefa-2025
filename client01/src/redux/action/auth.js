import { AUTH, FETCH_USER_ID, GET_ALL_USERS } from "../constants/actionTypes";
import * as api from "../api/auth";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const signUp = (userData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signup(userData);
        console.log("Signup Response:", data);
        
        dispatch({ type: AUTH, payload: data });

        localStorage.setItem("profile", JSON.stringify(data)); // ✅ Store user in localStorage

        navigate("/"); // ✅ Redirect to home page after signup
    } catch (error) {
        console.error("Signup Error:", error.response?.data || error.message);
    }
};

export const signin = (userData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signin(userData);
        console.log("Signin Response:", data);
        
        dispatch({ type: AUTH, payload: data });

        localStorage.setItem("profile", JSON.stringify(data)); // ✅ Store user in localStorage

        navigate("/"); // ✅ Redirect to home page after login
    } catch (error) {
        console.error("Signin Error:", error.response?.data || error.message);
    }
};


export const fetchAllUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllUsers();
        console.log("Fetched Users:", data.users); // Debugging

        dispatch({ type: GET_ALL_USERS, payload: data.users });
    } catch (error) {
        console.error("Error fetching users:", error.response?.data || error.message);
    }
};

export const getUserById = (userId) => async (dispatch) => {
    try {
      const { data } = await api.getUserById(userId);
      console.log("Fetched User Data:", data);  // ✅ Debugging log
      dispatch({ type:FETCH_USER_ID, payload: data });
    } catch (error) {
      console.error("Error fetching user by ID:", error);
    }
  };
  

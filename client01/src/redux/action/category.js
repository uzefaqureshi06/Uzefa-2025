import * as api from '../api/category.js'
import { CREATE_USER, DELETE_USER, FETCH_ALL_CATEGORY, FETCH_ALL_USER, UPDATE_USER } from '../constants/actionTypes.js';

// export const createUser =(name,email,password)=> async(dispatch) =>{
//     try {
//         const {data} =await api.createUser(name,email,password);
//         dispatch({type:CREATE_USER,payload:data});
//     } catch (error) {
//         console.log(error)
//     }
// };
export const getAllCategory = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCategories(); // Ensure fetchUsers() exists in your API file
        dispatch({ type: FETCH_ALL_CATEGORY, payload: data });
    } catch (error) {
        console.log("Error fetching categories:", error);
    }
};


// export const deleteUser=(id)=>async(dispatch)=>{
//     try {
//         await api.deleteUser(id);
//         dispatch({type:DELETE_USER,payload:id})
//     } catch (error) {
//         console.log(error)
//     }
// };

// export const updateUser=(id,updateduser)=>async(dispatch)=>{
//     try {
//         const {data}=await api.updateUser(id,updateduser);
//         dispatch({type:UPDATE_USER,payload:data});
//     } catch (error) {
//         console.log(error)
//     }
// }

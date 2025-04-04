import { CREATE_USER, DELETE_USER, FETCH_ALL_CATEGORY, FETCH_ALL_USER, FETCH_CATEGORY_ID, FETCH_USER, UPDATE_USER } from '../constants/actionTypes.js';

export default (category = [], action) => { 
    switch (action.type) {
        case FETCH_ALL_CATEGORY: 
            return action.payload; 

        // case DELETE_USER:
        //     return users.filter((user) => user._id !== action.payload); 

        //     case UPDATE_USER:
        //         users.map((user)=> user._id === action.payload._id ? action.payload : user );

        case FETCH_CATEGORY_ID:
            return action.payload;
        default:
            return category; 
    }
};

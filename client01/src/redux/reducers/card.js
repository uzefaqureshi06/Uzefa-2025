import { CREATE_CARD, FETCH_ALL_CARDS } from '../constants/actionTypes.js';

export default (card = [], action) => { 
    switch (action.type) {
        case FETCH_ALL_CARDS: 
            return action.payload; 

        // case DELETE_USER:
        //     return users.filter((user) => user._id !== action.payload); 

        //     case UPDATE_USER:
        //         users.map((user)=> user._id === action.payload._id ? action.payload : user );

        case CREATE_CARD:
        return [...card, action.payload]; 

        default:
            return card; 
    }
};

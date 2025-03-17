import * as api from '../api/card.js'
import { CREATE_CARD, FETCH_ALL_CARDS,} from '../constants/actionTypes.js';

export const createCard =(title,description,imageUrl)=> async(dispatch) =>{
    try {
        const {data} =await api.createCard(title,description,imageUrl);
        dispatch({type:CREATE_CARD,payload:data});
    } catch (error) {
        console.log(error)
    }
};
export const getAllCard = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCard(); // Ensure fetchUsers() exists in your API file
        dispatch({ type: FETCH_ALL_CARDS, payload: data });
    } catch (error) {
        console.log("Error fetching cards:", error);
    }
};




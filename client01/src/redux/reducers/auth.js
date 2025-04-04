import * as actionType from '../constants/actionTypes';

const initialState = {
    users: [],       // Stores all users
    singleUser: {},  // Stores a single user

};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case actionType.AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
            return { ...state, authData: action.payload.savedUser };

        case actionType.GET_ALL_USERS:
            return { ...state, users: action.payload };

        case actionType.FETCH_USER_ID:
            return { ...state, singleUser: action.payload };  // ✅ Fixed the duplicate case

        case actionType.LOGOUT:
            localStorage.clear();
            return { ...initialState };  // ✅ Reset state completely on logout

        default:
            return state;
    }
};

export default auth;

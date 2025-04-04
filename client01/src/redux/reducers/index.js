import {combineReducers} from 'redux'
import category from './category';
import card from './card';
import auth from './auth';
import blog from './blog';
const rootReducer =combineReducers({
category,
card,
auth,
blog
})

export default rootReducer;
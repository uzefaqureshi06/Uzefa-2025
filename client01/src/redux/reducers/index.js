import {combineReducers} from 'redux'
import category from './category';
import card from './card';
const rootReducer =combineReducers({
category,
card
})

export default rootReducer;
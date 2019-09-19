import { combineReducers } from 'redux'
import nutritionReducer from './nutritionReducer';

const rootReducer = combineReducers({
    nutrition: nutritionReducer
})


export default rootReducer
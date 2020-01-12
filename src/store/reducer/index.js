import {combineReducers} from "redux";
import cartReducer from "./cart";
export default combineReducers({
    cartReducer,
})
//多个redux合并,redux模块化
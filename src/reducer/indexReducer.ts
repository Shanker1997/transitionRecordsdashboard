import { combineReducers } from "redux";
import { appReducer } from "./reducer";

 const MainReducer=combineReducers({
    application:appReducer

})
export default MainReducer
import { combineReducers } from "redux";
import userdataReducer from "./userdataReducer";

const rootReducer = combineReducers({
userdata:userdataReducer
})

export default rootReducer;
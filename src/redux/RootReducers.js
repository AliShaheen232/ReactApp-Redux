import samsungReducer from "./samsung/SamsungReducer";
import oppoReducer from "./oppo/OppoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  samsung: samsungReducer,
  oppo: oppoReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import authReducer from './auth'
export default combineReducers({
  dummyState: () => "remove me",
  auth:authReducer
});


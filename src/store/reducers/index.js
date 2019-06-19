import { combineReducers } from "redux";
import authReducer from './auth';
import resultReducer from './results';
export default combineReducers({
  dummyState: () => "remove me",
  auth:authReducer,
  result:resultReducer
});


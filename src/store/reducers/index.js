import { combineReducers } from "redux";
import authReducer from "./auth";
import resultReducer from "./results";
import invitationReducer from "./invitations";
export default combineReducers({
  dummyState: () => "remove me",
  auth: authReducer,
  result: resultReducer,
  invitation: invitationReducer
});

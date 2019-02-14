// @flow
import { combineReducers } from "redux";
import usersReducer from "containers/Users/reducer";

export default combineReducers({
  users: usersReducer
});

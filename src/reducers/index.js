import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

// Combine All Reducers
const allReducers = combineReducers({
  counterReducer,
  loggedReducer,
});

export default allReducers;

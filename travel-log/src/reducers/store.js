import { combineReducers, createStore } from "redux";
import postReducer from "./Post/reducer";
import usersReducer from "./SignupLogin/reducer";

const reducers = combineReducers({ postReducer, usersReducer })
const store = createStore(reducers)

export default store;
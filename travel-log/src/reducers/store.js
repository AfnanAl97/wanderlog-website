import { combineReducers, createStore } from "redux";
import postReducer from "./Post/reducer";

const reducers = combineReducers({ postReducer })
const store = createStore(reducers)

export default store;
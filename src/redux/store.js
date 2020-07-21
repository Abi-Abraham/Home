import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import listReducer from "./homes/listReducer";

const store = createStore(listReducer, applyMiddleware(thunk));

export default store;

// @flow
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import middlewares from "./middlewares";

export default createStore(rootReducer, applyMiddleware(...middlewares));

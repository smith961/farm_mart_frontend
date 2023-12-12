import {createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import taskReducer from "./Reducers/taskReducer";

const store = createStore(
    taskReducer,
    composeWithDevTools(applyMiddleware (thunk))
);

export default store;
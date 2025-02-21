import { combineReducers, configureStore } from "@reduxjs/toolkit";
import songsReducer from "../reducers/songsReducer";

const rootReducer = combineReducers({
  songsFetch: songsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

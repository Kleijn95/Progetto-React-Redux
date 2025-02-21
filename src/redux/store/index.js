import { combineReducers, configureStore } from "@reduxjs/toolkit";
import songsReducer from "../reducers/songsReducer";
import playerReducer from "../reducers/playerReducer";
import likeReducer from "../reducers/likeReducer";

const rootReducer = combineReducers({
  songsFetch: songsReducer,
  player: playerReducer,
  like: likeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

// reducers/songsReducer.js
import { SET_SONGS } from "../actions/songsActions";

const initialState = {
  songs: [],
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONGS:
      console.log("Payload in Reducer:", action.payload);
      return {
        ...state,
        songs: [...state.songs, ...action.payload],
      };
    default:
      return state;
  }
};

export default songsReducer;

import { SET_SONGS } from "../actions/songsActions";

const initialState = {
  songs: {},
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONGS:
      return {
        ...state,
        songs: {
          ...state.songs,
          [action.query]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default songsReducer;

import { TOGGLE_LIKE } from "../actions/likeActions";

const initialState = {
  liked: [],
};

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LIKE: {
      const isAlreadyLiked = state.liked.some((song) => song.id === action.payload.id);
      return {
        ...state,
        liked: isAlreadyLiked
          ? state.liked.filter((song) => song.id !== action.payload.id)
          : [...state.liked, action.payload],
      };
    }
    default:
      return state;
  }
};

export default likeReducer;

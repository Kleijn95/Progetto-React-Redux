export const TOGGLE_LIKE = "TOGGLE_LIKE";

export const toggleLike = (song) => {
  console.log("Toggling like for:", song);
  return {
    type: TOGGLE_LIKE,
    payload: song,
  };
};

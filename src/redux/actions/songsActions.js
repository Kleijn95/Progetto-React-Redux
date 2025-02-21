export const SET_SONGS = "SET_SONGS";

export const setSongs = (songs) => ({
  type: SET_SONGS,
  payload: songs,
});

export const fetchSongs = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      const data = await response.json();
      const fetchedSongs = data.data.slice(0, 4);
      console.log(fetchedSongs);
      dispatch(setSongs(fetchedSongs));
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };
};

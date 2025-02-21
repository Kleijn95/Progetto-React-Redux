import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../redux/actions/songsActions";
import { setCurrentSong } from "../redux/actions/playerActions";
import { toggleLike } from "../redux/actions/likeActions";
import { HeartFill } from "react-bootstrap-icons";

const MapSection = ({ query }) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songsFetch.songs[query] || []);
  const likedSongs = useSelector((state) => state.like.liked);

  useEffect(() => {
    dispatch(fetchSongs(query));
  }, [query, dispatch]);

  const handleLike = (song) => {
    dispatch(toggleLike(song));
  };

  return (
    <Row>
      <h2 className="text-white mb-3">{query}</h2>
      {songs.map((song) => {
        const isLiked = likedSongs.some((liked) => liked.id === song.id);
        return (
          <Col key={song.id} xs={12} md={6} lg={4} xl={3} className="text-center mb-5">
            <img className="img-fluid" src={song.album.cover_medium} alt="track" />
            <p className="text-white fw-bold mt-2">
              Track: {song.title}
              <br />
              Artist: {song.artist.name}
            </p>
            <div className="d-flex justify-content-center align-items-center gap-3">
              <button className="btn btn-outline-light" onClick={() => dispatch(setCurrentSong(song))}>
                Play
              </button>
              <button className="btn" onClick={() => handleLike(song)}>
                <HeartFill color={isLiked ? "red" : "white"} size={20} />
              </button>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default MapSection;

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

  return (
    <Row>
      <h2 className="text-white mb-3">{query}</h2>
      {songs.map((singleSong) => {
        const isLiked = likedSongs.some((song) => song.id === singleSong.id);

        return (
          <Col key={singleSong.id} xs={12} md={6} lg={4} xl={3} className="text-center mb-5">
            <img className="img-fluid" src={singleSong.album.cover_medium} alt="track" />
            <p className="text-white fw-bold mt-2">
              Track: {singleSong.title}
              <br />
              Artist: {singleSong.artist.name}
            </p>
            <div className="d-flex justify-content-center align-items-center gap-3">
              <button className="btn btn-outline-light" onClick={() => dispatch(setCurrentSong(singleSong))}>
                Play
              </button>
              <button
                className="btn"
                onClick={() => {
                  console.log("Like button clicked for:", singleSong);
                  dispatch(toggleLike(singleSong));
                }}
              >
                {isLiked ? <HeartFill color="red" size={20} /> : <HeartFill color="white" size={20} />}
              </button>
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default MapSection;

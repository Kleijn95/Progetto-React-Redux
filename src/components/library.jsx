import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { HeartFill } from "react-bootstrap-icons";
import { toggleLike } from "../redux/actions/likeActions";
import { setCurrentSong } from "../redux/actions/playerActions";

const Library = () => {
  const likedSongs = useSelector((state) => state.like.liked);
  const dispatch = useDispatch();

  const handleLike = (song) => {
    dispatch(toggleLike(song));
  };

  const handlePlay = (song) => {
    dispatch(setCurrentSong(song));
  };

  return (
    <Col md={9} className="mainPage">
      <h2 className="text-white mb-3">Your Liked Songs</h2>
      {likedSongs.length > 0 ? (
        <Row>
          {likedSongs.map((song) => (
            <Col key={song.id} xs={12} md={6} lg={4} xl={3} className="text-center mb-5">
              <img className="img-fluid" src={song.album.cover_medium} alt="track" />
              <p className="text-white fw-bold mt-2">
                Track: {song.title}
                <br />
                Artist: {song.artist.name}
              </p>
              <div className="d-flex justify-content-center align-items-center gap-3">
                <button className="btn btn-outline-light" onClick={() => handlePlay(song)}>
                  Play
                </button>
                <button className="btn" onClick={() => handleLike(song)}>
                  <HeartFill color="red" size={20} />
                </button>
              </div>
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-white">No liked songs yet. Start adding some!</p>
      )}
    </Col>
  );
};

export default Library;

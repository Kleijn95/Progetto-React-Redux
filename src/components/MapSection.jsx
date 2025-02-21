import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../redux/actions/songsActions";

const MapSection = ({ query }) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songsFetch.songs);

  useEffect(() => {
    dispatch(fetchSongs(query));
  }, [query, dispatch]);

  return (
    <Row>
      <h2 className="text-white mb-3">{query}</h2>
      {songs.map((singleSong) => (
        <Col key={singleSong.id} xs={12} md={6} lg={4} xl={3} className="text-center mb-5">
          <img className="img-fluid" src={singleSong.album.cover_medium} alt="track" />
          <p className="text-white fw-bold mt-2">
            Track: {singleSong.title}
            <br />
            Artist: {singleSong.artist.name}
          </p>
        </Col>
      ))}
    </Row>
  );
};

export default MapSection;

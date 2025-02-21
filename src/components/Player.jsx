import { Row, Col } from "react-bootstrap";
import shuffleImg from "../assets/playerbuttons/shuffle.png";
import prevImg from "../assets/playerbuttons/prev.png";
import playImg from "../assets/playerbuttons/play.png";
import nextImg from "../assets/playerbuttons/next.png";
import repeatImg from "../assets/playerbuttons/repeat.png";
import { useSelector } from "react-redux";

const Player = () => {
  const currentSong = useSelector((state) => state.player.currentSong);

  return (
    <div className="fixed-bottom bg-container">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="align-items-center">
            <Col xs={6} md={4}>
              {currentSong && (
                <div className="mt-3 d-flex align-items-center">
                  <img
                    src={currentSong.album.cover_medium}
                    alt={currentSong.title}
                    className="img-fluid me-3"
                    style={{ width: "60px", height: "60px", borderRadius: "8px" }}
                  />

                  <div className="text-center">
                    <p className="text-white mb-0">{currentSong.title}</p>
                    <p className="text-white">{currentSong.artist.name}</p>
                  </div>
                </div>
              )}
            </Col>
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex justify-content-between">
                <a href="#">
                  <img src={shuffleImg} alt="Shuffle" className="player-button" />
                </a>

                <a href="#">
                  <img src={prevImg} alt="Previous" className="player-button" />
                </a>

                <a href="#">
                  <img src={playImg} alt="Play" className="player-button" />
                </a>

                <a href="#">
                  <img src={nextImg} alt="Next" className="player-button" />
                </a>

                <a href="#">
                  <img src={repeatImg} alt="Repeat" className="player-button" />
                </a>
              </div>
              <div className="progress mt-3">
                <div className="progress-bar" role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Player;

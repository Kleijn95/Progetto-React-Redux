import { Row, Col } from "react-bootstrap";

import shuffleImg from "../assets/playerbuttons/shuffle.png";
import prevImg from "../assets/playerbuttons/prev.png";
import playImg from "../assets/playerbuttons/play.png";
import nextImg from "../assets/playerbuttons/next.png";
import repeatImg from "../assets/playerbuttons/repeat.png";

const Player = () => {
  return (
    <div className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex justify-content-between">
                <PlayerButton src={shuffleImg} alt="Shuffle" />
                <PlayerButton src={prevImg} alt="Previous" />
                <PlayerButton src={playImg} alt="Play" />
                <PlayerButton src={nextImg} alt="Next" />
                <PlayerButton src={repeatImg} alt="Repeat" />
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

const PlayerButton = ({ src, alt }) => {
  return (
    <a href="#">
      <img src={src} alt={alt} className="player-button" />
    </a>
  );
};

export default Player;

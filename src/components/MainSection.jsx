import { Row, Col } from "react-bootstrap";
import MapSection from "./MapSection";

const MainSection = () => {
  return (
    <Col md={9} className="mainPage ">
      <Col className="d-none d-lg-flex mainLinks col-9 col-lg-11 mb-5">
        <a href="#">TRENDING</a>
        <a href="#">PODCAST</a>
        <a href="#">MOODS AND GENRES</a>
        <a href="#">NEW RELEASES</a>
        <a href="#">DISCOVER</a>
      </Col>

      <Row>
        <MapSection query="Queen" />
      </Row>
      <Row>
        <MapSection query="Katy Perry" />
      </Row>
      <Row>
        <MapSection query="Eminem" />
      </Row>
    </Col>
  );
};

export default MainSection;

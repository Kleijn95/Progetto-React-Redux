import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import MapSection from "./MapSection";

const MainSection = () => {
  const searchQuery = useSelector((state) => state.search.searchQuery);

  return (
    <Col md={9} className="mainPage">
      <Col className="d-none d-lg-flex mainLinks col-9 col-lg-11 mb-5">
        <a href="#">TRENDING</a>
        <a href="#">PODCAST</a>
        <a href="#">MOODS AND GENRES</a>
        <a href="#">NEW RELEASES</a>
        <a href="#">DISCOVER</a>
      </Col>
      {searchQuery && (
        <Row>
          <h2 className="text-white mb-3">Risultati per:</h2>
          <MapSection query={searchQuery} />
        </Row>
      )}
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

import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import MainSection from "./components/MainSection";
import SideBar from "./components/sidebar";
import Player from "./components/player";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={3} className="sidebar-container">
          <div className="sidebar-col">
            <SideBar />
          </div>
        </Col>
        <Col md={9} className="main-col d-flex flex-column">
          <MainSection />
          <Player />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainSection from "./components/MainSection";
import SideBar from "./components/sidebar";
import Player from "./components/player";
import Library from "./components/library";

function App() {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col md={3} className="sidebar-container">
            <div className="sidebar-col">
              <SideBar />
            </div>
          </Col>
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/library" element={<Library />} />
          </Routes>
          <Player />
        </Row>
      </Container>
    </Router>
  );
}

export default App;

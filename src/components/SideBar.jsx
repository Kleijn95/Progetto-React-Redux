import { ListGroup, Button } from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";

const SideBar = () => {
  return (
    <nav className="navbar flex-column align-items-start h-100 sidebar-custom bg-black vh-100 px-3">
      <a className="navbar-brand py-3 px-2" href="index.html">
        <img src={logo} alt="Spotify Logo" width="131" height="40" />
      </a>
      <ListGroup className="w-100">
        <ListGroup.Item className="bg-black border-0">
          <a className="nav-item nav-link text-secondary d-flex align-items-center" href="#">
            <HouseDoorFill className="fs-3" />
            &nbsp; Home
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="bg-black border-0">
          <a className="nav-item nav-link text-secondary d-flex align-items-center" href="#">
            <BookFill className="fs-3" />
            &nbsp; Your Library
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="bg-black border-0">
          <div className="input-group mt-3">
            <input type="text" className="form-control" placeholder="Search" aria-label="Search" />
            <Button variant="outline-secondary" className="h-100">
              GO
            </Button>
          </div>
        </ListGroup.Item>
      </ListGroup>
      <div className="mt-auto mx-auto text-center pb-3">
        <Button variant="light" className="signup-btn w-100 mb-2 rounded-pill">
          Sign Up
        </Button>
        <Button variant="dark" className="login-btn w-100 rounded-pill">
          Login
        </Button>
        <div className="text-secondary">
          <a href="#" className="text-decoration-none text-secondary">
            Cookie Policy
          </a>{" "}
          |
          <a href="#" className="text-decoration-none text-secondary">
            {" "}
            Privacy
          </a>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;

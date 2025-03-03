import { ListGroup, Button } from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { fetchSongs } from "../redux/actions/songsActions";
import { setSearchQuery } from "../redux/actions/searchActions";
import { Link } from "react-router-dom";
const SideBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      dispatch(setSearchQuery(query));
      dispatch(fetchSongs(query));
      setQuery("");
    }
  };

  return (
    <nav className="navbar flex-column align-items-start h-100 sidebar-custom bg-black vh-100 px-3">
      <a className="navbar-brand py-3 px-2" href="index.html">
        <img src={logo} alt="Spotify Logo" width="131" height="40" />
      </a>
      <ListGroup className="w-100">
        <ListGroup.Item className="bg-black border-0">
          <Link to="/" className="nav-item nav-link text-secondary d-flex align-items-center">
            <HouseDoorFill className="fs-3" />
            &nbsp; Home
          </Link>
        </ListGroup.Item>
        <ListGroup.Item className="bg-black border-0">
          <Link to="/library" className="nav-item nav-link text-secondary d-flex align-items-center">
            <BookFill className="fs-3" />
            &nbsp; Your Library
          </Link>
        </ListGroup.Item>
        <ListGroup.Item className="bg-black border-0">
          <form onSubmit={handleSearch}>
            <div className="input-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button variant="outline-secondary" type="submit" className="h-100">
                GO
              </Button>
            </div>
          </form>
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

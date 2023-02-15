import { Navbar, Nav, Image } from "react-bootstrap";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const NetflixNav = ({ claim }) => {
  const location = useLocation();

  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#221f1f", color: "white" }} className="mx-3">
      <Link to="/" className="pl-0">
        <Image src="./assets/img/logo.png" style={{ width: "100px", height: "55px" }} />
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="flex justify-content-between">
        <Nav className="mr-auto">
          <Link className={`nav-link fw-bold ${location.pathname === "/" ? "active" : ""}`} to="/">
            Home
          </Link>
          <Link className={`nav-link fw-bold ${location.pathname === "/tv-shows" ? "active" : ""}`} to="/tv-shows">
            TV Shows
          </Link>
          <Link className={`nav-link fw-bold ${location.pathname === "/movies" ? "active" : ""}`} to="/movies">
            Movies
          </Link>
          <Link
            className={`nav-link fw-bold ${location.pathname === "/recently-added" ? "active" : ""}`}
            to="/recently-added"
          >
            Recently Added
          </Link>
          <Link className={`nav-link fw-bold ${location.pathname === "/my-list" ? "active" : ""}`} to="/my-list">
            My List
          </Link>
        </Nav>
        <div className="d-flex flex-row flex-center">
          <FaSearch className="mx-2" />
          <div className="mx-2">KIDS</div>
          <FaBell className="mx-2" />
          <FaUser className="mx-2" />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NetflixNav;

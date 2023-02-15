import { Navbar, Nav, Image, NavLink } from "react-bootstrap";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";

const NetflixNav = () => {
  return (
    <Navbar expand="lg" variant="dark" style={{ backgroundColor: "#221f1f", color: "white" }} className="mx-3">
      <NavLink className="pl-0">
        <Image src="./assets/img/logo.png" style={{ width: "100px", height: "55px" }} />
      </NavLink>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="flex justify-content-between">
        <Nav className="mr-auto">
          <Nav.Link href="#home" className="fw-bold">
            Home
          </Nav.Link>
          <Nav.Link href="#link" className="active fw-bold">
            TV Shows
          </Nav.Link>
          <Nav.Link href="#link" className="fw-bold">
            Movies
          </Nav.Link>
          <Nav.Link href="#link" className="fw-bold">
            Recently Added
          </Nav.Link>
          <Nav.Link href="#link" className="fw-bold">
            My List
          </Nav.Link>
        </Nav>
        <div class="d-flex flex-row flex-center">
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

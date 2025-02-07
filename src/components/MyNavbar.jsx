import { Navbar, Nav, Container, Dropdown, Button } from "react-bootstrap";
import { BsSearch, BsBellFill } from "react-icons/bs";

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="justify-content-start align-items-center">
        <Navbar.Brand href="#">
          <img src="./src/assets/img/pngegg.png" alt="Logo" width="80" />
        </Navbar.Brand>
        <Nav className="d-flex flex-row">
          <Nav.Link href="#" className="fs-6 text-secondary fw-semibold mx-2">
            Home
          </Nav.Link>
          <Nav.Link href="#" className="fs-6 text-secondary active mx-2">
            Tv Shows
          </Nav.Link>
          <Nav.Link href="#movies" className="fs-6 text-white fw-semibold mx-2">
            Movies
          </Nav.Link>
          <Nav.Link href="#" className="link fs-6 text-secondary fw-semibold mx-2">
            Recently Added
          </Nav.Link>
          <Nav.Link href="#" className="link fs-6 text-secondary fw-semibold mx-2">
            My List
          </Nav.Link>
        </Nav>
        <div className="d-flex ms-auto align-items-center">
          <BsSearch className="text-white mx-2" size={18} />
          <Nav.Link href="#" className="fs-6 text-secondary fw-medium mx-3">
            KIDS
          </Nav.Link>
          <BsBellFill className="text-white mx-2" size={18} />
          <Dropdown align="end">
            <Dropdown.Toggle as={Button} variant="outline-light" className="border-0 pe-0">
              <img
                src="https://img.freepik.com/foto-gratuito/colpo-verticale-di-felice-femmina-dalla-pelle-scura-con-i-capelli-ricci_273609-15519.jpg"
                width="30"
                alt="user"
              />
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#">
                <img
                  src="https://img.freepik.com/foto-gratuito/colpo-verticale-di-felice-femmina-dalla-pelle-scura-con-i-capelli-ricci_273609-15519.jpg"
                  width="30"
                  className="me-2"
                  alt="user"
                />
                Profilo1
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <img
                  src="https://img.freepik.com/foto-gratuito/colpo-verticale-di-felice-femmina-dalla-pelle-scura-con-i-capelli-ricci_273609-15519.jpg"
                  width="30"
                  className="me-2"
                  alt="user"
                />
                Profilo2
              </Dropdown.Item>
              <Dropdown.Item href="#">Edit Profile</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

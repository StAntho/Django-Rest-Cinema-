import { Link } from "react-router-dom";
import logo from "./logo.png";
import "../styles/Header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Header() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/film">Films à la programmation</Nav.Link>
              <Nav.Link href="/special">Programmation spéciale</Nav.Link>
              {localStorage.getItem("access_token") === null ? (
                <>
                  <Nav.Link href="/login">Connexion</Nav.Link>
                  <Nav.Link href="/register">Inscription</Nav.Link>
                </>
              ) : (
                <Nav.Link href="/logout">Déconnexion</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

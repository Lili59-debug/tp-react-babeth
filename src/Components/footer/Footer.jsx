import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./footer.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Footer extends Component {
  render() {
    return (
      <footer>
        <Navbar bg="dark" variant="dark" sticky="bottom">
          <Nav className="mr-auto navbar-centre">
            <Nav.Link href="/cgv">
              <abbr title="Conditions générales de vente">CGV</abbr>
            </Nav.Link>
            <Nav.Link href="/mentions-legales">Mentions légales</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
      </footer>
    );
  }
}

export default Footer;

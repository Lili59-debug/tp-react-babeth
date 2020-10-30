import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./header.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.refresh(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  refresh() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="lg"
        className="bg-light justify-content-start"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="/">
          <img
            alt="Logo Merci Babeth !"
            src="/img/cropped-logo-texte-8.png"
            className="d-inline-block align-center"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/qui">Qui sommes-nous ?</Nav.Link>
            <NavDropdown title="Nos produits" id="basic-nav-dropdown">
              <NavDropdown.Item href="/rayons">
                Tous nos produits
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Header>Par catégorie</NavDropdown.Header>
              <NavDropdown.Item href="/rayons/epicerie_salee">
                Épicerie salée
              </NavDropdown.Item>
              <NavDropdown.Item href="/rayons/viandes">
                Viande, poissons, œufs
              </NavDropdown.Item>
              <NavDropdown.Item href="/rayons/fruits_et_legumes">
                Fruits et légumes
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/adherer">Adhérer à l'association</Nav.Link>
          </Nav>

          <Form inline>
            <FormControl
              type="text"
              placeholder="Votre recherche"
              className="mr-sm-2"
            />
            <Button className="submitButton" type="submit">
              Rechercher
            </Button>
          </Form>

          <Nav.Link href="/admin">
            <FontAwesomeIcon id="cogs" icon={faCogs} />
          </Nav.Link>
          <Navbar.Text>{this.state.date.toLocaleTimeString()}</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;

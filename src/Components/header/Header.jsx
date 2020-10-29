import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import Nav from 'react-bootstrap/Nav'

class Header extends Component {
    render() {
        return(
            <Nav className="justify-content-center">
                <Nav.Item>
                    <Nav.Link href="/">Accueil</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/admin">Administrateur</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}

export default Header
import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <Container>
            <Navbar variant="light" collapseOnSelect expand="lg" sticky="top" >
                <Link to='/'>
                    <Navbar.Brand>Portafolio</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to='uno'>
                            <Nav.Item className="text-dark">Parte Uno</Nav.Item>
                        </Link>
                        <Link to='/dos'>
                            <Nav.Item className="text-dark">Parte Dos</Nav.Item>
                        </Link>
                    </Nav>
                    <Nav>
                        <Link to='/about'>
                            <Nav.Item className="text-dark">Acerca De</Nav.Item>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default Header

import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = ({parteUno, parteDos, acercaDe}) => {
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
                            <Nav.Item className={parteUno}>Parte Uno</Nav.Item>
                        </Link>
                        <Link to='/dos'>
                            <Nav.Item className={parteDos}>Parte Dos</Nav.Item>
                        </Link>
                    </Nav>
                    <Nav>
                        <Link to='/about'>
                            <Nav.Item className={acercaDe}>Acerca De</Nav.Item>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default Header

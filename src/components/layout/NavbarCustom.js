import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from './../../images/geducar.png';

class NavbarCustom extends React.Component {
    render() {
      return (
        <Navbar bg="light" variant="light" fixed="top">
            <Container fluid="md">
              <Navbar.Brand href="/geducar/">
                <img
                  src={logo}
                  width="120"
                  height="40"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/geducar/" style={{color: '#15869D', fontWeight: 600}}>Home</Nav.Link>
              </Nav>
            </Container>
        </Navbar>
      );
    }
}

export default NavbarCustom;

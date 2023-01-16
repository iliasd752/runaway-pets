import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NewNav = () => {
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className='navbrand' href="/">Runaway Pets</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/pet-profile">Profile</Nav.Link>
            <Nav.Link href="/pet-card">Pets</Nav.Link>
            <Nav.Link href="/notification">Notification</Nav.Link>
            <Nav.Link href="/found-pet">Found Pet</Nav.Link>
            <Nav.Link href="/register-user">Register</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="error400">Error 400</NavDropdown.Item>
              <NavDropdown.Item href="error404">
                Error404
              </NavDropdown.Item>
              <NavDropdown.Item href="pet-component">Pet Component</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="settings">
                Settings
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


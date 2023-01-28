import React, { useContext, useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Context } from "../store/appContext";


export const NewNav = () => {

const { store, actions } = useContext(Context);
const token = sessionStorage.getItem("token");
const user = sessionStorage.getItem("user_id");
const [notification, setNotification] = useState(false)

useEffect(() => {
  const fetch = setInterval(() => {
  actions.petList(token, user);
}, 5000);
return ()=>{
  clearInterval(fetch);
}
 
},[]);

useEffect(() => {
  const timeout = setInterval(() => {
    checkFinder();

  }, 3000);
  return ()=>{
    clearInterval(timeout);
  }
},[]);


const checkFinder= ()=>{
  const test = store.petList.some(pet => pet.finder_id !=null)
  if (test==true) {setNotification(true)}
  
}





  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className='navbrand' href="/">Runaway Pets</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/pet-profile">Profile</Nav.Link>
            <Nav.Link href="/pet-card">Pets</Nav.Link>
            <Nav.Link href="/notification" id={notification?"active":"inactive"}>Notification</Nav.Link>
            <Nav.Link href="/found-pet">Found Pet</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


import React from "react";
import petpic from "../../img/dogprofile.png";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";



export const PetComponent = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container d-flex flex-column mt-5 align-items-center">
      <div className="d-flex flex-column justify-content-center petcard align-items-center mb-4 mr-4 ml-3">
        <div className="col  d-flex align-items-center justify-content-center ">
          <img className="petpiccard mr-5" src={props.image}></img>
    
        </div>

        <div className="col  d-flex flex-column align-items-center ml-5">
          <h2>{props.name}</h2>
          <h3 className="card_species">{props.species}</h3>
          <p>{props.important}</p>
          <a className="signup mb-4" onClick={handleShow}>See my QR Code</a>
          <a className="signup mb-4">Delete pet</a>
        </div>
      </div>

      {/* MODAL */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="blacktext">Print this tag and attach it to your pet's collar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <img src={petpic}></img>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

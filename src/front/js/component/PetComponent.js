import React from "react";
import petpic from "../../img/dogprofile.png";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";



export const PetComponent = (props) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const token = sessionStorage.getItem("token")

  const navigate = useNavigate();


  const deletePet = () => {
    const opts = {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer "+ token
        },
      body: JSON.stringify({
                qr_code: props.qrcode.toString()
        })
      }
      fetch(process.env.BACKEND_URL + "/api/delete_pet", opts)
      .then((resp) => {
        if (resp.status === 200) return resp;
        window.location.reload(true);
      })
      .then(data => {
        console.log(data)
      })
      .catch((error) => {
        console.error("There was an error", error);
      });

  }

 
 

  

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
          <a className="signup mb-4" onClick={deletePet}>Delete pet</a>
        </div>
      </div>

      {/* MODAL */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="blacktext">Print this tag and attach it to your pet's collar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://3000-iliasd752-runawaypets-la8walngl3l.ws-eu82.gitpod.io/found-pet/${props.qrcode}`}></img>
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

import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";


export const PetComponent = (props) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const token = sessionStorage.getItem("token")

  const navigate = useNavigate();

  const downloadImg = () => {
    saveAs(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${process.env.FRONTEND_URL}/found-pet/${props.qrcode}`)
  }

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
       // // console.log(data)
      })
      .catch((error) => {
        console.error("There was an error", error);
      });

  }

 
 

  

  return (
    <div className="container d-flex flex-column mt-5 align-items-center">
      <div className="d-flex flex-column justify-content-center petcardfound align-items-center mb-4 mr-4 ml-3">
        <div className="col  d-flex align-items-center justify-content-center ">
          <img className="petpiccard mr-5" src={props.image}></img>
    
        </div>

        <div className="col  d-flex flex-column align-items-center ml-5">
          <h2>{props.name}</h2>
          <h3 className="card_species">{props.species}</h3>
          <h5>Important information</h5>
          <p>{props.important}</p>
          <a className="signup mb-4" onClick={handleShow}>See my QR Code</a>
          <a className="signup mb-4" onClick={deletePet}>Delete pet</a>
        </div>
      </div>

      {/* MODAL */}

      <Modal className="modalborders" show={show} onHide={handleClose}>
        <Modal.Header className="qrcode1">
          <Modal.Title className="modaltitle">Print this tag and attach it to {props.name}'s collar</Modal.Title>
        </Modal.Header>
        <Modal.Body className="qrcode">
         <img className="qrcode" src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${process.env.FRONTEND_URL}/found-pet/${props.qrcode}`}></img>
        </Modal.Body>
        <Modal.Footer className="qrcode">
        <Button className="purplebutton" variant="secondary" onClick={downloadImg}>
            Download
          </Button>
          <Button className="purplebutton" variant="secondary" onClick={handleClose}>
            Close
          </Button>
       
        </Modal.Footer>
      </Modal>
    </div>
  );
};

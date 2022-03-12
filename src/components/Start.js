import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import './Start.scss'

export default function Start(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="modal-start">
        <h2>K/DA Matching Game</h2>
        <p>Instructions</p>
        <Button onClick={props.onHide}>START!</Button>
      </Modal.Body>
    </Modal>
  );
}

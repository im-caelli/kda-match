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
      className="modal-start"
    >
      <Modal.Body>
        <div className='modal-start-content-wrapper'>
          <div className='modal-start-content'>
            <h2>K/DA Matching Game</h2>
            <p>Click a card to flip it and try to find a matching pair. How many turns would it take you to match them all? 🤔 </p>
            <Button className='modal-start-btn' onClick={props.onHide}>START!</Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

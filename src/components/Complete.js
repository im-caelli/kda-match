import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './Complete.scss'

export default function Complete(props) {
  let title
  let message
  let style
  let isAhri = false

  if (props.turns <= 6 ) {
    title = 'Straight Up Villain'
    style = 'evelynn'
    message = 'A perfect score... You either cheated or exploited a very obvious bug— Evelynn approves.'
  } else if (props.turns <= 8) {
    title = 'The Baddest'
    style = 'akali'
    message = 'Cuz that\'s what the baddest do.'
  } else if (props.turns <= 10) {
    title = 'Drum Go Dum'
    style = 'kaisa'
    message = 'Maybe the thought of Kai\'sa shaking it in your face distracted you a couple of times...'
  } else {
    title = 'Wanna Leave This Hell'
    style = 'ahri'
    message = 'Here\'s some uplifting inspiration. You need it.'
    isAhri = true
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-kda-c"
    >
      <Modal.Body className={style}>
        <div className='modal-kda-c-content-wrapper'>
          <div className='modal-kda-c-content'>
            <div className='modal-kda-c-content-bgimg'></div>
            <div className='modal-kda-c-content-text'>
              <h2>{ title }</h2>
              <p>
                {isAhri ? (<span>Bestie... it took you <span className='modal-kda-turns'>{props.turns}</span> turns.</span>) : (<span>  You did it in <span className='modal-kda-turns'>{props.turns}</span> turns! </span>) }
              
                <br /><br />
                { message } 
                <br /><br />
                {isAhri ? (<iframe width="400" height="225" src="https://www.youtube.com/embed/WW1BpABbzHs?controls=0&amp;autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>) : '' }
              </p>
              <Button className='modal-kda-c-btn' onClick={props.onHide}>Play Again!</Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

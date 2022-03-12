import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import './Complete.scss'

export default function Complete(props) {
  let title
  let message
  let style
  let link = 'https://www.youtube.com/watch?v=WW1BpABbzHs'
  let isAhri = false

  if (props.turns <= 6 ) {
    title = 'Straight Up Villain'
    style = 'evelynn'
    message = 'A perfect score... You either cheated or exploited a very obvious bug.'
  } else if (props.turns <= 9) {
    title = 'The Baddest'
    style = 'akali'
    message = 'Cuz that\'s what the baddest do.'
  } else if (props.turns <= 12) {
    title = 'Drum Go Dum'
    style = 'kaisa'
    message = 'Maybe the thought of Kai\'sa shaking it in your face distracted you a couple of times...'
  } else {
    title = '...'
    style = 'ahri'
    message = 'Watch this before tying again: '
    isAhri = true
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className='modal-complete'>
        <h4>{ title }</h4>
        <p>
          You did it in {props.turns} turns! <br />

          { message } 
          {isAhri ? (<a href={ link } target="_blank" rel="noreferrer">Get Boosted</a>) : '' }
            
        </p>
        <Button onClick={props.onHide}>Play Again!</Button>
      </Modal.Body>
    </Modal>
  )
}

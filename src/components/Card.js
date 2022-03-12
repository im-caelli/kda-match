import React from 'react'
import './Card.scss'

export default function Card({ card, handleChoice, flipped, disabled}) {

  const pickCard = () => {
    if(!disabled){
      handleChoice(card)
      console.log(card)
    }
  }

  return (
    <div className={`card-item ${ flipped ? "flipped" : ""}`}>
      <img className='card-img card-front' src={card.src} alt='card front' draggrable='false' />
      <img 
        className='card-img card-back' 
        src='img/cover.png' 
        onClick={pickCard} 
        alt='card back' 
        draggable='false' />
    </div>
  )
}

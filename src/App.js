import React, { useEffect, useState } from 'react'
import './App.scss';
import Card from './components/Card';
import Header from './components/Header';
import Start from './components/Start';
import Complete from './components/Complete';

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [pickOne, setPickOne] = useState(null)
  const [pickTwo, setPickTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [completeModalShow, setCompleteModalShow] = useState(false)

  
  const card = [
    { 'type': 'ahri', 'src': 'img/ahri.png', matched:false },
    { 'type': 'akali', 'src': 'img/akali.png', matched:false },
    { 'type': 'evelynn', 'src': 'img/evelynn.png', matched:false },
    { 'type': 'kaisa', 'src': 'img/kaisa.png', matched:false },
    { 'type': 'seraphine', 'src': 'img/seraphine.png', matched:false },
    { 'type': 'group', 'src': 'img/group.png', matched:false },
  ]

  const shuffleCards = () => {

    const shuffledCards = [...card, ...card]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
    setPickOne(null)
    setPickTwo(null)
  }

  const handleChoice = (card) => {
    pickOne ? setPickTwo(card) : setPickOne(card)
  }

  // Evaluate the cards
  useEffect(() => {

    if (pickOne && pickTwo) {
      setDisabled(true)
      
      if (pickOne.type === pickTwo.type){

        console.log("It's a match!")
        
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.type === pickTwo.type) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })

        resetTurn()

      } else {

        console.log("Womp Womp...")
        setTimeout(() => resetTurn(), 1000)

      }

    }

  },[pickOne, pickTwo])

  // Check if complete
  useEffect(() => {
    setCards(prevCards => {
      return prevCards.map(card => {
        return card
      })
    })

      if (cards.length !== 0) {
        setTimeout(() => {
          if (cards.every(card => card.matched)) {
            console.log('Game complete!')
            setCompleteModalShow(true)
          } else {
            console.log('Continue...')
          }
      
          console.log(cards)
          console.log('match check not empty: ' + cards.every(card => card.matched))
        }, [1000])
      }
      
  }, [pickTwo])

  // Reset Choices and Increse Turn
  const resetTurn = () => {
    setPickOne(null)
    setPickTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }
  
  const closeAndPlay = () => {
    setCompleteModalShow(false)
    shuffleCards()
  }
  // On Load
  useEffect(() => { 
    shuffleCards()
    setCompleteModalShow(false)
    setModalShow(true)
  }, [])


  return (
    <div className="App">
     {/* <p><button onClick={shuffleCards}>New Games</button> | {turns}</p> */}
     <Header turns={turns} reset={shuffleCards} />
     <div className="card-board">
       {cards.map( card => (
         <Card 
         key={card.id}
         card={card}
         handleChoice={handleChoice}
         flipped={card === pickOne || card === pickTwo || card.matched}
         disabled={disabled}
       />
       ))}
     </div>
     <Start show={modalShow} onHide={() => setModalShow(false)} />
     <Complete show={completeModalShow} onHide={closeAndPlay} turns={turns} />
    </div>
  );
}

export default App;

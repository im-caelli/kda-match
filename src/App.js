import React, { useEffect, useState } from 'react'
import './App.css';

const cards = [
  { 'type': 'ahri', 'src': 'img/ahri.png', matched:false },
  { 'type': 'akali', 'src': 'img/akali.png', matched:false },
  { 'type': 'evelynn', 'src': 'img/evelynn.png', matched:false },
  { 'type': 'kaisa', 'src': 'img/kaisa.png', matched:false },
  { 'type': 'seraphine', 'src': 'img/seraphine.png', matched:false },
  { 'type': 'group', 'src': 'img/group.png', matched:false }
]

function App() {
  const [cards, setCards] = useState([])

  const shuffleCards = () => {

    const shuffledCards = [...cards, ...cards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
  }

  console.log(cards)

  return (
    <div className="App">
     <p>Hello!</p>
     <p><button onClick={shuffleCards}>New Game</button></p>
    </div>
  );
}

export default App;

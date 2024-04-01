import { React, useState } from 'react'
import Die from '../components/Die.jsx'
import { nanoid } from 'nanoid'
import './App.css'

function App() {

  const [dice, setDice] = useState(allNewDice());
  const [count, setCount] = useState(0);
  function generateNewDie() {
    return { 
      id:nanoid(),
      value: Math.ceil(Math.random()*6),
      isHeld: false 
    }  
  }

  function allNewDice() {
    let dieArray = []
    for(let i=0;i<10;i++) {
      dieArray.push(generateNewDie())
    }
    return dieArray
  }

  function rollDie() {
    setCount(prevCount => prevCount+1);
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? 
        die :
        generateNewDie()
    }))
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? 
        {...die, isHeld: !die.isHeld} :
        die
    }))
  }

  const dieElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)}/>)
  return (
    <main>
      <div className='die-container'>
        {dieElements}
      </div>
      <p className='countTag'>No. of Rolls: {count}</p>
      <button onClick={rollDie} className='btn-roll'>Roll</button>
    </main>
  )
}

export default App
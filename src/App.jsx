import { React, useState } from 'react'
import Die from '../components/Die.jsx'
import { nanoid } from 'nanoid'
import './App.css'

function App() {

  const [die, setDie] = useState(getRandomArr)

  function getRandomArr() {
    let dieArray = []
    for(let i=0;i<10;i++) {
      dieArray.push(
        { 
          id:nanoid(),
          value: Math.ceil(Math.random()*6), 
          isHeld: false 
        }        
      )
    }
    return dieArray
  }

  function rollDie() {
    setDie(getRandomArr())
  }

  return (
    <main>
      <div className='die-container'>
        {die.map(obj => <Die key={obj.id} value={obj.value} />)}
      </div>
      <button onClick={rollDie} className='btn-roll'>Roll</button>
    </main>
  )
}

export default App
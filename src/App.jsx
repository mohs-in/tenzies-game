import { React, useState } from 'react'
import Die from '../components/Die.jsx'
import './App.css'

function App() {

  const [die, setDie] = useState(getRandomArr)

  function getRandomArr() {
    let dieArray = []
    for(let i=0;i<10;i++) {
      dieArray.push(
        { 
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
        {die.map(obj => <Die value={obj.value} />)}
      </div>
      <button onClick={rollDie} className='btn-roll'>Roll</button>
    </main>
  )
}

export default App
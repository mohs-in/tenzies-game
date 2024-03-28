import { React, useState } from 'react'
import Die from '../components/Die.jsx'
import './App.css'

function App() {

  const [die, setDie] = useState(getRandomArr)

  function getRandomArr() {
    let dieArray = []
    for(let i=0;i<10;i++) {
      dieArray.push(Math.ceil(Math.random()*6))
    }
    return dieArray
  }

  function rollDie() {
    setDie(getRandomArr())
  }

  return (
    <main>
      <div className='die-container'>
        {die.map(num => <Die value={num} />)}
      </div>
      <button onClick={rollDie} className='btn-roll'>Roll</button>
    </main>
  )
}

export default App
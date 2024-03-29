import { React, useState } from 'react'
import Die from '../components/Die.jsx'
import { nanoid } from 'nanoid'
import './App.css'

function App() {

  const [die, setDie] = useState(getNewDie());
  const [isTrue, setIsTrue] = useState({id:'',value:false});
  function getNewDie() {
    let dieArray = []
    for(let i=0;i<10;i++) {
      dieArray.push(
        { 
          id:nanoid(),
          value: Math.ceil(Math.random()*6), 
        }        
      )
    }
    return dieArray
  }

  function rollDie() {
    setDie(getNewDie())
  }

  function clickHandler() {
    setIsTrue(prevState => {prevState.id})
  }

  const dieElements = die.map(obj => <Die key={obj.id} value= {obj.value} isHeld={isTrue} clickHandler={clickHandler}/>)
  return (
    <main>
      <div className='die-container'>
        {dieElements}
      </div>
      <button onClick={rollDie} className='btn-roll'>Roll</button>
    </main>
  )
}

export default App
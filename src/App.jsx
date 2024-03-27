import { React, useState } from 'react'
import Die from '../components/Die.jsx'
import './App.css'

function App() {

  let numArr = []
  for(let i=0;i<10;i++) {
    numArr.push(Math.floor(Math.random()*6+1))
  }
    
  return (
    <main>
      <div className='die-container'>
        {numArr.map(num => <Die value={num} />)}
      </div>
    </main>
  )
}

export default App
import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]= useState(15)
  //let counter = 5
  const addValue = ()=>{
    if(counter < 20){
      counter ++;
    }
    setCounter(counter);
    console.log("clicked",counter)
  }

  const removeValue = ()=>{
    if(counter > 0){
      counter --;
    }
    setCounter(counter);
    console.log("clicked",counter)
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value: {counter}</h2>
    <button
    onClick = {addValue}>Add value</button>
    <br/>
    <button 
    onClick  = {removeValue}>Remove value</button>
    </>
  )
}

export default App

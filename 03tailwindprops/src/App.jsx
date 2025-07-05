import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const UserObj = {
    name: "Mohit",
    age : 21
  }

  let newArray = [1,2,3,4];

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-10'>Tailwind test</h1>
    <Card year = "2022" imgSource = "https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg"/>

    <Card year="2025" imgSource="https://images.pexels.com/photos/939331/pexels-photo-939331.jpeg"/>
        
    </>
  )
}

export default App

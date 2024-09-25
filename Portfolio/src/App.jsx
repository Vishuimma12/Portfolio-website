import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Landing/>
    </>
  )
}

export default App

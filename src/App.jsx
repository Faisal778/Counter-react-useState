import {useState} from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const increase_value = () =>{
    setCounter(counter + 1)
  }
  

  return (
    <>
        <h1>Counter {counter}</h1>
        <button
        onClick={increase_value}>Increase Number</button>
        <button>Decrease Number</button>
    </>
  )
}

export default App

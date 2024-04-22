import {useState} from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const increase_value = () =>{
    if(counter <20)
    setCounter(counter + 1)
  }

  const decrease_value = () =>{
    if (counter > 0)
    setCounter(counter - 1)
  }


  return (
    <>
        <h1>Counter {counter}</h1>
        <button style= {{backgroundColor: "tomato"}}
        onClick={decrease_value}>Decrease Number</button>
      &nbsp;
        <button style={{backgroundColor: "lightgreen"}}
        onClick={increase_value}>Increase Number</button>
    

      <h5>This counter should be updated to latest  {counter}</h5>

      <h2>This counter should be updated as well  {counter}</h2>

    </>
  )
}

export default App

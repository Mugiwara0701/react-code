import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const addValue = () => {
    console.log("button clicked", Math.random())
    //counter = counter + 1
    setCounter(counter+1)
    }

    const removeValue = () =>{
      if(counter < 0){
        setCounter(0)
      }if(counter>0){
        setCounter(counter - 1)
      }
    }
  return (
    <>
      <h1>Akshat Kumar Nautiyal</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Increment</button>
      <br />
      <br/> 
      <button
      onClick={removeValue}
      >Decrement</button>
      {/* <button
      onClick={()=> setCounter(counter-1)}
      >Decrement</button> */}
    </>
  )
}

export default App

import { useState } from "react"

function App() {
  const [bgcolor, setColor] = useState("black")
  return (
    <div className='w-full h-screen duration-200 flex flex-col items-center justify-center pt-4'
    style={{ backgroundColor: bgcolor}}>
      <h1 className="text-white text-7xl">Background Changer</h1>
      <div className="fixed flex flex-wrap gap-2 justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor : "green"}}>Green</button>
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor : "red"}}>Red</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor : "blue"}}>Blue</button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor : "purple"}}>Purple</button>
          <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor : "orange"}}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App

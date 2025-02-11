import React, { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  // ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)     // str.length is multiplied because we want to pick random char from the char list
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0,10) //set Selection range
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-white bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3 rounded-lg text-orange-500' 
        placeholder='Password'
        readOnly
        ref={passwordRef}/>
        <button 
        className='bg-blue-700 text-white px-3 py-0.5 shrink-0 mx-2 rounded-xl'
        onClick={copyPasswordToClipboard}
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type="range"
          min={6}
          max={20}
          value={length}
          className='cursor-pointer'
          style={{accentColor: "#1D4ED8",}}
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label className='text-white'>Length: {length}</label>
        </div>
        <div className='flex text-sm gap-x-2'>
          <input 
          type="checkbox"
          defaultChecked = {numberAllowed}
          id='numberInput'
          style={{accentColor: "#1D4ED8",}}
//This help to ensure to change the previous value if we use setNumberAllowed(true) then after the second time we want to generate the the password the the setNumberAllowed will always true
          onChange={() => {
            setNumberAllowed((prev) => !prev)     
          }}
          />
          <label>Number</label>
        </div>
        <div className='flex text-sm gap-x-2'>
        <input 
          type="checkbox" 
          defaultChecked = {charAllowed}
          style={{accentColor: "#1D4ED8",}}
          id='charInput'
//This help to ensure to change the previous value if we use setCharAllowed(true) then after the second time we want to generate the the password the the setCharAllowed will always true
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}
          />
          <label>Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

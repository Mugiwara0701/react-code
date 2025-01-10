import React from 'react'

function Card({username,text="bye bye"}) {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://imgs.search.brave.com/TQNuKo_pTsoQ0rnGM8b7WlH9HDWtCaZGuPdUjuu_HU0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvZG9nZV9tZW1l/L3NtYWxsL2RvZ2Vf/bWVtZV9QTkcxNS5w/bmc"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            {text}
          </h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          tempora ipsum soluta amet
        </p>
      </div>
  )
}

export default Card

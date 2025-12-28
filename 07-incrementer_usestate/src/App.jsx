import React from 'react'
import { useState } from 'react'

const App = () => {
  
  const [num,setNum] = useState(1)

  function increaseNum(){
    setNum(num+1)
    
  }

  function decreaseNum(){
    setNum(num-1)
    
  }

  function jumpbyNum(){
    setNum(num + 5)
  }

  function decreasebyNum(){
    setNum(num -5)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jumpbyNum}>Increase by 5</button>
      <button onClick={decreasebyNum}>Decrease by 5</button>

    </div>
  )
}

export default App

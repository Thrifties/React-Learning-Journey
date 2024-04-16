import { useState } from 'react'
import './App.css'

function App() {
  const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("World");

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <input
      onSubmit={(e) => e.preventDefault()}
      type="text" 
      placeholder="What's your name?" 
      value={name}/>
      <button onMouseOver={handleMouseOver} style={{backgroundColor: isMouseOver? "white" : "black", color: isMouseOver? "black" : "white"}} onMouseOut={handleMouseOut}>Click Me</button>
    </div>
  )
}

export default App

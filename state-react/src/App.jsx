import React, {useState} from 'react';
import './App.css';



function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  setInterval(() => {
    setTime(new Date().toLocaleTimeString())
  }, 1000);

  const [time2, setTime2] = useState(new Date().toLocaleTimeString());

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dynamic Time</h1>
        <h2>{time}</h2>
        <h1>Static Time</h1>
        <h2>{time2}</h2>
        <button onClick={() => setTime2(new Date().toLocaleTimeString())}>Get Time</button>
      </header>
    </div>
  )
}

export default App

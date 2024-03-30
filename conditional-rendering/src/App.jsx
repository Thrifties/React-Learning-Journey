import React from 'react';
import './App.css';
import Form from './components/Form';

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  )
}

export default App;
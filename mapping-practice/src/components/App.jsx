import React from 'react';
import Card from './Card';
import './App.css';
import emojipedia from './emojipedia';

function App() {
return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createCard => (
          <Card
            key={createCard.id}
            emoji={createCard.emoji}
            name={createCard.name}
            meaning={createCard.meaning}
          />
        ))}
      </dl>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import Deck from '../components/Deck';

const pushDeck = setter => (decks, deck = { id: Date.now() }) => (
  setter([...decks, deck])
);

const App = () => {
  const [decks, setDecks] = useState([]);
  const push = pushDeck(setDecks);
  return (
    <div className="flex flex-center is-full">
      <h1>Deck Builder</h1>
      <button type="button" onClick={() => push(decks)}>Adicionar Deck</button>
      <div className="grid grid-5 decks">
        {decks.map(deck => (
          <Deck key={deck.id} />
        ))}
      </div>
    </div>
  );
};

export default App;

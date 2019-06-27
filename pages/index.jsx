import React, { useEffect } from 'react';
import auth from 'solid-auth-client';

const fetch = async () => {
  const session = await auth.currentSession();
  console.log('SESSION', session);
  const res = await auth.fetch(session.webId);
  const data = await res.text();
  console.log('CONTENT', data);
};

const App = () => {
  useEffect(() => {
    fetch();
  });
  return (
    <div>
      <h1>Deck Builder</h1>
    </div>
  );
};

export default App;

import React from 'react';
import { LoginButton, LoggedIn, LoggedOut } from '@solid/react';
import LogoutButton from '@solid/react/lib/components/LogoutButton';

export default () => (
  <div>
    <h1>Deck Builder</h1>
    <LoggedOut>
      Entre aqui!
      <LoginButton popup="popup.html">Emtrar muleque!</LoginButton>
    </LoggedOut>
    <LoggedIn>
      SAIR!!!!
      <LogoutButton />
    </LoggedIn>
  </div>
);

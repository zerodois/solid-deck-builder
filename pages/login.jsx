import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import auth from 'solid-auth-client';

const login = async idp => auth.login(idp);

const verifyUser = async () => {
  const session = await auth.currentSession();
  if (!session) {
    return;
  }
  Router.push('/');
};

const Login = () => {
  const [idp, setIdp] = useState('https://me.solid');
  useEffect(() => {
    verifyUser();
  });
  return (
    <section className="flex is-full flex-center">
      <form className="flex form-login">
        <button
          onClick={() => login('https://solid.community')}
          className="form-login__block"
          type="button"
        >
          Login With Solid Community
        </button>
        <button
          onClick={() => login('https://inrupt.net')}
          className="form-login__block"
          type="button"
        >
          Login With Inrupt
        </button>
        <input
          className="form-login__block"
          type="text"
          value={idp}
          onChange={e => setIdp(e.target.value)}
        />
        <button
          onClick={() => login(idp)}
          className="form-login__block"
          type="button"
        >
          Login with custom provider
        </button>
      </form>
    </section>
  );
};

export default Login;

import React from 'react';

import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';
// import { Container } from './styles';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="logo-GoBarber" />
      <form>
        <input placeholder="Digite seu nome completo" />
        <input type="email" placeholder="Digite seu email" />
        <input type="password" placeholder="Digite sua senha" />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}

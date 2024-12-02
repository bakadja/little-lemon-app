import React from 'react'
import { ReactComponent as Logo } from '../images/Logo.svg';
import { Container } from '../styles/components.styles';

export default function Nav() {
  return (
    <Container as="nav">
      <Logo />
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#reservation">Reservation</a>
        </li>
        <li>
          <a href="#order-online">Order Online</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
      </ul>
    </Container>
  );
}

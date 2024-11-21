import React from 'react'
import LogoImage from '../images/Logo.png'
import {Container, Logo, NavList, NavItem, NavLink, Title, Wrapper} from '../styles/components.styles'


export default function Footer() {

  return (
    <Container as="footer">
      <Logo src={LogoImage} alt="Logo" />
      <NavList>
        <Wrapper>
          <Title>
            Doormat<br></br>navigation
          </Title>
          <NavItem>
            <NavLink href="#home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#menu">Menu</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#reservations">Reservations</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#order-online">Order Online</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#login">Login</NavLink>
          </NavItem>
        </Wrapper>
        <Wrapper>
          <Title>Contact</Title>
          <NavItem>
            <NavLink href="#home">Adresse</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about">Phone Number</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#menu">Email</NavLink>
          </NavItem>
        </Wrapper>
        <Wrapper>
          <Title>Social Media Links</Title>
          <NavItem>
            <NavLink href="#home">Adresse</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about">Phone Number</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#menu">Email</NavLink>
          </NavItem>
        </Wrapper>
      </NavList>
    </Container>
  );
}

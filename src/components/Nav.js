import React from 'react'
import LogoImage from '../images/Logo.png'
import {Container, Logo, NavList, NavItem, NavLink} from   '../styles/components.styles'

export default function Nav() {
return (
    <Container as="nav">
        <Logo src={LogoImage} alt="Logo"/>
        <NavList>
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
        </NavList>
    </Container>
);
}

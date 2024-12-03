import React from 'react'
import { Container, Section, Image, Title, Description, Button } from '../styles/components.styles';
import heroImage from '../images/restaurantfood.png';

export default function Header() {
  return (
    <Container as="header">
      <Section id="home">
        <div>
          <Title>Little Lemon</Title>
          <Title as="h2">Chicago</Title>
          <Description>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with modern twists.
          </Description>
          <Button>Reserve a Table</Button>
        </div>
        <Image src={heroImage} alt="restaurant food" />
        <div></div>
      </Section>
    </Container>
  );
}

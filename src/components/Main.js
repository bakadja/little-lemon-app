import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { Container, Section, Title, Button, Card, Image, Description } from '../styles/components.styles';
import bruchetta from '../images/bruchetta.png';
import greekSalad from '../images/greek-salad.png';
import lemonDessert from '../images/lemon-dessert.png';

export default function Main() {
  return (
    <Container>
      <Section id="menu">
        <Title>This weeks specials !</Title>
        <Button>Online Menu</Button>
        <Card>
          <Image src={bruchetta} alt="brucheta" />
          <Title>Greek Salad</Title>
          <span>$12.99</span>
          <Description>
            Fresh tomatoes, cucumbers, red onions, feta cheese, and olives
            tossed in a lemon vinaigrette.
          </Description>
          <Button>
            Order a delevery
            </Button>
            <FontAwesomeIcon icon={faMotorcycle} />
        </Card>
        <Card>
          <Image src={greekSalad} alt="greek salad" />
          <Title>Bruchetta</Title>
          <span>$9.99</span>
          <Description>
            Toasted bread topped with fresh tomatoes, basil, and garlic.
          </Description>
          <Button>Order a delevery</Button>
        </Card>
        <Card>
          <Image src={lemonDessert} alt="lemon dessert" />
          <Title>Lemon Dessert</Title>
          <span>$6.99</span>
          <Description>
            A light lemon cake topped with powdered sugar and lemon zest.
          </Description>
          <Button>Order a delevery</Button>
        </Card>
      </Section>
    </Container>
  );
}

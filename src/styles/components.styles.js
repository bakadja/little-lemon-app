import styled from "styled-components";
// import { media } from "./media";
import { layoutMixin, gridItemMixin, navMixin, heroSectionMixin, heroImageMixin, titleMixin, heroDescriptionMixin, buttonMixin } from "./mixins";

export const RootLayout = styled.div`
${layoutMixin}
`;

export const Container = styled.div`
${gridItemMixin}
${props => props.as === 'nav' && navMixin}

`;


export const Section = styled.section`
${props => props.id === 'home' && heroSectionMixin}
`;

export const HeroImage = styled.img`
${heroImageMixin}
`;

export const Title = styled.h1`
${titleMixin}
`;

export const Description = styled.p`
${heroDescriptionMixin}
`;

export const Button = styled.button`
${buttonMixin}`;

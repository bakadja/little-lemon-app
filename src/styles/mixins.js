import { css } from "styled-components";
import { media } from "./media";


export const gridMixin = css`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(min-content, auto);
  gap: 1rem;

  ${media.tablet`
    grid-template-columns: repeat(8, 1fr);
    gap: 0.5rem;
  `}

  ${media.mobile`
    grid-template-columns: 16px 1fr auto 16px;
    gap: 0.5rem;
  `}
`;

export const layoutMixin = css`
background-color: white;
max-width: 1440px;
margin: 5% auto;
width: 100%;
${gridMixin}
`;

export const gridItemMixin = css`
    grid-column: ${props => {
        if (props.as === 'nav') {
            return '3 / 11;';
        }

        if (props.as === 'header') {
            return '1/ -1;';
        }
    }};

    ${media.tablet`
        grid-column: ${props => {
            if (props.as === 'nav') {
                return '2 / 8;';
            }
        }};
    `}

    ${media.mobile`
        grid-column: ${props => {
            if (props.as === 'nav') {
                return '2 / span 2;';
            }
        }};
    `}
`;

export const navMixin = css`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;

  a {
    // font
    font-family: "Karla", sans-serif;
    font-size: clamp(13px, calc(0.8125rem + 0.1vw), 18pt);
    font-weight: bold;
    font-style: normal;

    // text
    text-decoration: none;
    text-transform: uppercase;
    line-height: normal;

    // other
    color: #495e57;
    &:hover {
      color: #3a4b47;
      text-decoration: underline;
    }
  }

  svg {
    @media (max-width: 545px) {
      margin-bottom: 1rem;
    }
  }

  li {
    display: inline-block;
    margin-right: 0.5rem;
  }

  ${media.desktopMax`
        a {
            font-size: 1.5rem;
        }
    `}
`;


export const heroSectionMixin = css`
  background-color: #495e57;
  ${gridMixin}

  grid-template-rows: minmax(10px, 20px) 1fr minmax(100px, auto);

  div:nth-of-type(1) {
    grid-area: 2 / 3 / 3 / 8;

    ${media.tablet`
    grid-area: 2 / 2 / 3 / 5;
        `}

    ${media.mobile`
    grid-area: 2 / 2 / 3 / 3;
        `}
  }

  img {
    grid-area: 2 / 8 / 4 / 11;
    z-index: 1;
    border-radius: 1rem;

    ${media.tablet`
    grid-area: 2 / 6 / 4 / 8;`}

    ${media.mobile`
    grid-area: 2 / 3 / 4 / 4;
    `}

    @media (max-width: 265px) {
       grid-area: 3 / 2 / 4 / 4;
    }
  }

  div:nth-of-type(2) {
    grid-area: 3 / 1 / 4 / -1;
    background-color: white;
  }
`;

  export const imageMixin = css`
    width: 100%;
    height: auto;
    /* max-width: 374px; */
    max-width: ${(props) => (props.maxWidth ? props.maxWidth : "374px")};
    margin: 0 auto;

    ${media.tablet`
    width: 100%;
    max-width: 300px;
    `}

    ${media.mobile`
    width: clamp(100px, calc(30vw + 1vw), 200px);
    max-width: 200px;
    `}
  `;

  export const titleMixin = css`
    font-size: ${(props) =>
      props.as === "h2"
        ? "clamp(1.25rem, calc(1rem + 2vw), 40pt)"
        : "clamp(1.5rem, calc(1rem + 3vw), 64pt)"};
    color: ${(props) => (props.as === "h2" ? "#edefee" : "#f4ce14")};
    font-weight: 500;

    ${media.desktopMax`
  font-size: ${(props) => (props.as === "h2" ? "40pt" : "64pt")};
`}
  `;


export const heroDescriptionMixin = css`
font-size: clamp(0.875rem, calc(0.875rem + 0.1vw), 18pt);
line-height: 1.6;
font-weight: 500;
font-family: 'Karla', sans-serif;
color: #edefee;
text-align: left;
margin: 1rem 0;
max-width: 65ch; /* 65 characters */

${media.desktopMax`
font-size: 18pt;`}
`;




export const buttonMixin = css`
  width: 100%;
  max-width: 210px;
  background-color: #f4ce14;
  padding: 0.5rem 1rem;
  font-size: clamp(0.875rem, calc(0.875rem + 0.1vw), 18pt);
  color: #333333;
  border: none;
  border-radius: 16px;
  text-align: center;

  &:hover {
    background-color: #e0b800;
  }

  ${media.tablet`
        max-width: 150px;
    `}

  ${media.mobile`
        max-width: 140px;
    `}
    ${media.desktopMax`
font-size: 18pt;`}
`;

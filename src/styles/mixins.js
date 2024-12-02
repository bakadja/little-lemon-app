import { css } from "styled-components";
import { media } from "./media";

export const layoutMixin = css`
background-color: white;
max-width: 1440px;
margin: 5% auto;
width: 100%;
display: grid;
grid-template-columns: repeat(12,1fr);
grid-auto-rows: minmax(min-content, auto);
gap: 1rem;

${media.tablet`
grid-template-columns: repeat(8,1fr);
gap: 0.5rem;

`}

${media.mobile`
grid-template-columns: repeat(4,1fr);
gap: 0.5rem;
`}
`;

export const gridItemMixin = css`
    grid-column: ${props => {
        if (props.as === 'nav') {
            return '3 / 11;';
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
    margin: 0 1rem;
        grid-column: ${props => {
            if (props.as === 'nav') {
                return 'span 4;';
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
    font-size: clamp(14px, calc(0.875rem + 0.1vw), 18pt);
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
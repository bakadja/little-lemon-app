import { css } from 'styled-components';
import { media } from './media';


export  const appMixin = css`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 85px repeat(3, auto) 276px;
  grid-auto-rows: minmax(min-content, auto);
  gap: 20px;
  height: 100vh;
  /* margin: 0 70px; */
  margin: 5% auto;

  ${media.tablet`
    /* margin: 0 40px; */
    margin: 5% auto;
    grid-template-columns: repeat(8, 1fr);
  `}

    ${media.phone`
    /* margin: 0 20px; */
    margin: 5% auto;
    grid-template-columns: repeat(4, 1fr);
    `}
`;


export const containerMixin = css`
  grid-column: 3 / span 8;
  display: grid;
  grid-template-columns: minmax(80px, 1fr) 3fr;

  align-content: center;
  align-items: center;

  ${media.tablet`
    grid-column: 1 / span 8;
  `}

    ${media.phone`
    grid-column: 1 / span 4;
    `}
`;



export const headerMixin = css`
    grid-row: 1 / span 1;
`;

export const logoMixin = css`
  width: 150px;
  object-fit: contain;
  height: auto;
 
    ${media.tablet`
    width: 100px;

    `}
    ${media.phone`
    width: 80px;
   
    `}
  `;

export const navListMixin = css`
  display: flex;
  justify-content: space-between;

    ${media.tablet`
    padding: 0 5px;
    margin: 0;
    `}

    ${media.phone`
    padding: 0 3px;
    `}
`;


export const navLinkMixin = css`
  font-size: 1.2rem;
  font-weight: medium;
  color: #333333;
  font-family: karla, sans-serif;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f2f2f2;
    text-decoration: underline;
  }

    ${media.tablet`
        font-size: 1rem;
    `}

    ${media.phone`
        font-size: 0.7rem;
    `}
`;

export const titleMixin = css`
  font-size: 1.5rem;
  font-weight: bolder;
  color: #333333;
  font-family: karla, sans-serif;

    ${media.tablet`
    font-size: 1rem;
    `}

    ${media.phone`
    font-size: 0.7rem;
    `}
`;

  export const footerMixin = css`
    grid-row: 5 / span 1;
    //align-items: center;
  `;

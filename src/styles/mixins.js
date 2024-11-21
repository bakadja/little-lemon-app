import { css } from 'styled-components';

export const containerMixin = css`
  grid-column: 3 / span 8;
  display: grid;
  grid-template-columns: minmax(130px, 1fr) 3fr;
`;

export const logoMixin = css`
  width: 150px;
  height: auto;
  display: flex;
  align-self: center;
`;

export const navListMixin = css`
  display: flex;
  justify-content: space-between;
`;

export const titleMixin = css`
  font-size: 1.5rem;
  font-weight: bolder;
  color: #333333;
  font-family: karla, sans-serif;
`;


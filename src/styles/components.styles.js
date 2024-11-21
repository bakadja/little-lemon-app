import styled from "styled-components";
import {appMixin,containerMixin, logoMixin, navListMixin, titleMixin, footerMixin, navLinkMixin} from './mixins'

// App styling
// export const AppContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(12, 1fr);
//   gap: 20px;
// `;


export const AppContainer = styled.div`
  ${appMixin}
`;

// Nav-bar styling
// export const Container = styled.div`
//   grid-column: ${props => props.$gridColumn || "3 / span 8"};
//   display: ${props => props.$display || "flex"};
//   justify-content: ${props => props.$justifyContent || "space-between"};
//   align-items: ${props => props.$alignItems || "center"};
//   gap: ${props => props.$gap || "1rem"};
// `;

// export const Container = styled.div`
//   grid-column: ${props => props.$gridColumn};
//   display: ${props => props.$display };
//   grid-template-columns: ${props => props.$gridTemplateColumns};
// `;

// export const Logo = styled.img`
//   width: ${props => props.$width};
//   height: ${props => props.$height || "auto"};
//   display: ${props => props.$display};
//   align-self: ${props => props.$alignSelf};
// `;


// export const NavList = styled.ul`
//   list-style: none;
//   display: ${props => props.$display};
//   justify-content: ${props => props.$justifyContent};
// `;

// export const Title = styled.h1`
//   font-size: ${props => props.$fontSize || "1.5rem"};
//   font-weight: ${props => props.$fontWeight || "bolder"};
//   color: ${props => props.$color || "#333333"};
//   font-family: ${props => props.$fontFamily || "karla, sans-serif"};
// `;

export const Container = styled.div`
  ${containerMixin}
  ${props => props.as === "footer" && footerMixin}
`;

export const Logo = styled.img`
  ${logoMixin}
`;



export const NavList = styled.ul`
  list-style: none;
  ${navListMixin}
`;

export const NavItem = styled.li``;

// export const NavLink = styled.a`
//   text-decoration: none;
//   font-family: "karla", sans-serif;
//   font-size: 1.2rem;
//   color: #333333;
//   font-weight: medium;
//   &:hover {
//     color: #ee9272;
//     text-decoration: underline;
//   }
// `;

export const NavLink = styled.a`
  ${navLinkMixin}
`;

export const Title = styled.h1`
  ${titleMixin}
`;


export const Wrapper = styled.div`

`;
// Footer styling
// export const FooterContainer = styled.footer`
//   grid-column: 3 / span 8;
//   display: flex;
//   gap: 8rem;
//   /* justify-content: center; */
//   align-items: center;
// `;


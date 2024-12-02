import { css } from 'styled-components'

export const sizes = {
  mobileMax: 767,
  tabletMin: 768,
  tabletMax: 1024,
  desktopMin: 1025,
  desktopMax: 1440,
};

export const media = {
  mobile: (...args) => css`
    @media (max-width: ${sizes.mobileMax / 16}em) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: ${sizes.tabletMin /16}em) and (max-width: ${sizes.tabletMax / 16}em) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${sizes.desktopMin / 16}em) {
      ${css(...args)}
    }
  `,
  desktopMax: (...args) => css`
    @media (min-width: ${sizes.desktopMax / 16}em) {
      ${css(...args)}
    }
  `,
};


/*
    Utiliser em pour les media queries
    Utiliser rem pour les tailles de police dans le contenu
    Utiliser px pour les bordures et les petits détails visuels
 */


/**
 * Avantages des em
        Accessibilité
    Les em s'adaptent à la taille de police de base du navigateur
    Respecte les préférences d'accessibilité de l'utilisateur
    S'adapte quand l'utilisateur zoom le navigateur
 */
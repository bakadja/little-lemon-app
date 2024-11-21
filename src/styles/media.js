import { css } from 'styled-components'

export const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 576,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }
    `
    return acc
}   , {})



/**

  L'objet media ressemblera à ceci après l'exécution du reduce:
const media = {
  desktop: (...args) => css`
    @media (max-width: 62em)   //992/16 = 62em 
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (max-width: 48em) //768/16 = 48em 
      ${css(...args)}
    }
  `,
  phone: (...args) => css`
    @media (max-width: 36em) //576/16 = 36em
      ${css(...args)}
    }
  `
}
 */

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
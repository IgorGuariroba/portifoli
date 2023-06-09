import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  input,
  textarea {
    font-family: ${props => props.theme.bodyFont};
    font-size: ${props => props.theme.normalFontSize};
    font-weight: ${props => props.theme.weigth500};
  }

  body {
    background-color: ${props => props.theme.bodyColor};
    color: ${props => props.theme.textColor};
  }

  h1,
  h2,
  h3 {
    color: ${props => props.theme.titleColor};
    font-family: ${props => props.theme.secondFont};
    font-weight: ${props => props.theme.weigth700};
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button,
  input,
  textarea {
    background-color: transparent;
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
  }
`;


/* ========= REUSABLE COMPONENTS ========= */
// section
// padding-block: 4.37rem;

// grid
// display: grid;
// gap: 1.87rem;

// section__title
// font-size: ${props => props.theme.bigFontSize};
// font-weight: ${props => props.theme.weigth800};
// text-align: center;
// margin-bottom: 4.37rem;
// span:first-child {
//     color: ${props => props.theme.firstColor} !important;
// }


// container
// max-width:1140px;
// margin-inline:auto;
// padding-inline: 0.93rem
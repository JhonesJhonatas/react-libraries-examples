import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira Code', sans-serif;
    color: ${props => props.theme['--gray-50']};
  }

  body{
    background-color: ${props => props.theme['--gray-950']};
  }
`
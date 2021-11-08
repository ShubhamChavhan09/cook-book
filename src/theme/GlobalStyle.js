import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}

body{
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }) => theme.body};
    color:${({ theme }) => theme.text};
    min-width: 98.6vw;
    transition: all 0.5s linear;

  
}
`;

export default GlobalStyle;

export const lightTheme = {
  body: "#F7F7F7  ",
  text: " #0D0D0D",
};

export const darkTheme = {
  body: " #06080E",
  text: "#f5f5f5",
};

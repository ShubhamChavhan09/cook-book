import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}

body{
    margin: 0;
    padding:0;
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }) => theme.body};
    color:${({ theme }) => theme.text};
    width:98.5vw;
    transition: all 0.5 linear;
}
`;

export default GlobalStyle;

export const lightTheme = {
  body: "#F1F3F9",
  text: " #1B1B1B",
};

export const darkTheme = {
  body: " #06080E",
  text: "#f5f5f5",
};

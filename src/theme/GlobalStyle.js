import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}

body{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }) => theme.body};
    color:${({ theme }) => theme.text};
    width: 100vw;
    transition: all 0.2s linear;
}

.nav-menu {
  background-color:#576574;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition:all 0.5s ease-in-out;
}

.nav-menu.active {
  left: 0;
}
`;

export default GlobalStyle;

export const lightTheme = {
  // body: "linear-gradient(to right, #EAEDE5 , #FFFFFF)",
  body: "linear-gradient(to right  , #dfe4ea, #f5f6fa, #dfe4ea)",
  // body: "#002A27",
  text: "#0D0D0D",
  nav: "background: linear-gradient(to bottom, #1e272e, #ecf0f1);",
};

export const darkTheme = {
  body: "linear-gradient(to right , #101010 , #2F2E33, #101010)",
  // body: "#1A191B",
  text: "#f5f5f5",
  nav: "background: linear-gradient(to bottom, #ecf0f1, #1e272e);",
};

// 1A191B
// 2F2E33

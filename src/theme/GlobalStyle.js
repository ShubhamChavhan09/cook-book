import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}

body{
    margin: 0;
font-family: 'Roboto Condensed', sans-serif;
    background: ${({ theme }) => theme.body};
    color:${({ theme }) => theme.text};
    max-width: 100vw;
    transition: all 0.1s ease;
    text-align: center;
    
h1, h2, h3, h4{
font-family: 'Roboto Slab', serif;
font-weight: 300;


}
    @media (max-width: 1024px) {
      // padding: 1rem 5rem;
    }

  @media (max-width: 768px) {
    padding: 1rem;
  }
}

.nav-menu {
  background: ${({ theme }) => theme.body};
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 22px 30px;
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
  body: "linear-gradient(to right,  #F9FAFB ,#F8FAFA,  #F9FAFB)",
  text: "#574240",
  nav: "#ff7675",

  border: "#f3eed9",
  links: "",
};

export const darkTheme = {
  // body: "linear-gradient(to right , #101010 , #2F2E33, #101010)",
  body: "linear-gradient(to right , #0D0D0D, #101010, #0D0D0D)",
  text: "#C9C9C9",
  // nav: "#F6B162",
  nav: "#D19F9C",
  // nav: "#C8F8FF ",
  border: "#2E3034",
  // border: "#3F4756",
  links: "",
};

// 1A191B
// 2F2E33

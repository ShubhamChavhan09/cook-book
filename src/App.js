import React from "react";
import Navigation from "./components/Navigation";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle, { lightTheme, darkTheme } from "./theme/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import { UseDarkMode } from "./theme/UseDarkMode";
import { StoreProvider } from "./context";
import { reducer, initialState } from "./reducers";

const App = () => {
  const [theme, toggleTheme] = UseDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <Container>
      <ThemeProvider theme={themeMode}>
        <BrowserRouter>
          <GlobalStyle />
          <StoreProvider reducer={reducer} initialState={initialState}>
            <Navigation theme={theme} toggleTheme={toggleTheme} />
            <Routes />
          </StoreProvider>
        </BrowserRouter>
      </ThemeProvider>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.5s ease-in;
  positiion: relative;
`;

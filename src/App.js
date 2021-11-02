import React from "react";
import Navigation from "./components/Navigation";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle, { lightTheme, darkTheme } from "./theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { UseDarkMode } from "./theme/UseDarkMode";

const App = () => {
  const [theme, toggleTheme] = UseDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <BrowserRouter>
        <GlobalStyle />
        <Navigation theme={theme} toggleTheme={toggleTheme} />
        {/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

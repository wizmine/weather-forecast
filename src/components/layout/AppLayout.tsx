import React, { useState } from "react";
import AppHeader from "./AppHeader";
import AppContent from "./AppContent";
import AppFooter from "./AppFooter";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/globalStyles";
import { darkTheme, lightTheme } from "../../styles/theme";

const AppLayout = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <AppHeader theme={theme} toggleTheme={toggleTheme} />
        <Main>
          <AppContent />
        </Main>
        <AppFooter />
      </Container>
    </ThemeProvider>
  );
};

export default AppLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - 80px);
  flex: 1;
`;

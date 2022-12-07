import React from "react";
import ReactDOM from "react-dom/client";
import MainView from "./Views/MainView/MainView";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/Theme";
import GlobalStyles from "./assets/styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <BrowserRouter>
      <MainView />
    </BrowserRouter>
  </ThemeProvider>
);

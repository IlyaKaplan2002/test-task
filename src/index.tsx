import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "lazysizes";
import "overlayscrollbars/css/OverlayScrollbars.css";
import "@splidejs/react-splide/css/core";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import { App } from "./App";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-family-1)",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1440,
    },
  },
});

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

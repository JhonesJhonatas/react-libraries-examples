import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GitHubDataProvider } from "./hooks/getGitHubData";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <GitHubDataProvider>
          <Router />
        </GitHubDataProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

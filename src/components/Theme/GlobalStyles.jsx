import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
  color: ${({ theme }) => theme.text};
  transition: all 0.3s linear;
  background: ${({ theme }) => theme.cardBackground};
}
.content {
  background: ${({ theme }) => theme.contentBackground};
  transition: all 0.3s linear;
}
.sidebar,
.card,
.search {
  background: ${({ theme }) => theme.cardBackground};
  transition: all 0.3s linear;
}
.sidebar {
  border-right: ${({ theme }) => theme.cardBorder};
}
.card {
  border: ${({ theme }) => theme.cardBorder};
}
.search {
  border: ${({ theme }) => theme.cardBorder};
}
.geoScale {
  background: ${({ theme }) => theme.geoScale};
  transition: all 0.3s linear;
}
.lightThemeCircle {
  display: ${({ theme }) => theme.toggleLightIcon};
}
.darkThemeCircle {
  display: ${({ theme }) => theme.toggleDarkIcon};
}
  `;

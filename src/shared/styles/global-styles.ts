import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
body {
  background-color: ${({ theme }) => theme.colors.secondary};
}

`



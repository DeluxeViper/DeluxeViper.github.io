/** @format */

import { ThemeProvider } from "styled-components";

import { useState } from "react";
import { lightTheme, darkTheme } from "../themes/default";
import GlobalStyles from "./globals";

const Theme = ({ themeType, children }) => {
  return (
    <ThemeProvider theme={themeType === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;

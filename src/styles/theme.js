/** @format */

import { ThemeProvider } from "styled-components";

import { useState, createContext } from "react";
import { lightTheme, darkTheme } from "../themes/default";
import GlobalStyles from "./globals";

export const ThemeContext = createContext();

const Theme = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Theme;

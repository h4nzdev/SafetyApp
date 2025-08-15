import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = sessionStorage.getItem("isDarkMode");
    return storedTheme ? storedTheme === "true" : false; // default is false
  });

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Save theme whenever it changes
  useEffect(() => {
    sessionStorage.setItem("isDarkMode", isDarkMode.toString());
  }, [isDarkMode]);

  const value = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

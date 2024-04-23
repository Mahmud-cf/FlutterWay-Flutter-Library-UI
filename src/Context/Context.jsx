import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem('theme') || 'light'); // Get initial theme from local storage or default to light mode

  // Toggle function to switch between light and dark modes
  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('theme', newMode); // Persist to local storage
  };

  return (
    <ThemeContext.Provider value={{ mode, setMode, toggleMode }} >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// src/context/ThemeContext.tsx
"use client";

import { ConfigProvider, theme as antdTheme } from "antd";
import React, { createContext, useContext, useState } from "react";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Choose theme algorithm based on current mode
  const themeAlgorithm = isDarkMode
    ? antdTheme.darkAlgorithm
    : antdTheme.defaultAlgorithm;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ConfigProvider theme={{ algorithm: themeAlgorithm }}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

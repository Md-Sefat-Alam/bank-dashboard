"use client";

import { ConfigProvider, theme as antdTheme } from "antd";
import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Function to toggle theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newTheme = !prevMode ? "dark" : "light";
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme); // Save to localStorage only on client
      }
      return !prevMode;
    });
  };

  // Choose theme algorithm based on current mode
  const themeAlgorithm = isDarkMode
    ? antdTheme.darkAlgorithm
    : antdTheme.defaultAlgorithm;

  // Use `useEffect` to safely access `localStorage` on the client
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") || "light";
      setIsDarkMode(savedTheme === "dark");
    }
  }, []); // Run once on component mount

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

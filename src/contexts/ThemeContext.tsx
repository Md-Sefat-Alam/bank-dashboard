"use client";

import { ConfigProvider, theme as antdTheme } from "antd";
import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Retrieve theme from localStorage or default to light
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  // Function to toggle theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newTheme = !prevMode ? "dark" : "light";
      localStorage.setItem("theme", newTheme); // Save to localStorage
      return !prevMode;
    });
  };

  // Choose theme algorithm based on current mode
  const themeAlgorithm = isDarkMode
    ? antdTheme.darkAlgorithm
    : antdTheme.defaultAlgorithm;

  useLayoutEffect(() => {
    // This effect runs synchronously after DOM mutations
    // This prevents flicker by ensuring the theme is applied immediately
    const root = document.getElementById("root");
    if (root) {
      root.style.visibility = "hidden";
      root.style.opacity = "0";
      const timer = setTimeout(() => {
        root.style.visibility = "visible";
        root.style.opacity = "1";
      }, 10); // Ensure the styles are applied before showing content
      return () => clearTimeout(timer);
    }
  }, [isDarkMode]);

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

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
    const savedTheme = localStorage?.getItem("theme") || "dark";
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
    setIsDarkMode((prev) => {
      const savedTheme = localStorage?.getItem("theme") || "dark";
      return savedTheme === "dark";
    });
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

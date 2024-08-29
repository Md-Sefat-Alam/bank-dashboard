"use client";

import { BulbOutlined, MoonOutlined } from "@ant-design/icons";
import { ConfigProvider, theme } from "antd";
import React, { useEffect, useState } from "react";

// Types for Ant Design themes
type ThemeMode = "light" | "dark";

// Main component
const ThemeSwitcher: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>("light");

  // Load the theme from localStorage or default to light
  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as ThemeMode) || "light";
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Theme configuration to apply globally
  const themeConfig = {
    algorithm:
      currentTheme === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
  };

  // Hook to access current design tokens
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        algorithm: themeConfig.algorithm,
      }}
    >
      <div>
        {true ? (
          <BulbOutlined
            onClick={() => {toggleTheme()}}
            className="cursor-pointer text-xl hover:bg-gray-400/50 p-2 hover:rounded-full"
          />
        ) : (
          <MoonOutlined onClick={() => {toggleTheme()}} className="cursor-pointer text-xl hover:bg-gray-400/50 p-2 hover:rounded-full" />
        )}
      </div>
    </ConfigProvider>
  );
};

export default ThemeSwitcher;

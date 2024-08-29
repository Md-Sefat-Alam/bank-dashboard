"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { BulbOutlined, MoonOutlined } from "@ant-design/icons";

// Main component
const ThemeSwitcher: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div>
      {isDarkMode ? (
        <BulbOutlined
          onClick={() => {
            toggleTheme();
          }}
          className="cursor-pointer text-xl hover:bg-gray-400/50 p-2 hover:rounded-full"
        />
      ) : (
        <MoonOutlined
          onClick={() => {
            toggleTheme();
          }}
          className="cursor-pointer text-xl hover:bg-gray-400/50 p-2 hover:rounded-full"
        />
      )}
    </div>
  );
};

export default ThemeSwitcher;

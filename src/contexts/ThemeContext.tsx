"use client";

import { ConfigProvider, theme as antdTheme } from "antd";
import { ThemeProvider, useTheme } from "next-themes";
import { useMemo } from "react";

export default function ThemeInitializer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useTheme();

  // Use a memoized value for the algorithm based on the current theme
  const themeAlgorithm = useMemo(() => {
    return theme === "light"
      ? antdTheme.defaultAlgorithm
      : antdTheme.darkAlgorithm;
  }, [theme, localStorage]);

  return (
    <ConfigProvider
      theme={{
        algorithm: themeAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export const ThemeProviderComp: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { resolvedTheme, theme } = useTheme();

  // Ensure that the defaultTheme is correctly set based on the resolvedTheme or initial theme
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={resolvedTheme || theme || "light"}
      enableSystem={false} // Disable system theme detection if not needed
    >
      <ThemeInitializer>{children}</ThemeInitializer>
    </ThemeProvider>
  );
};

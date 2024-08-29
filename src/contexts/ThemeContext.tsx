"use client";

import { ConfigProvider, theme as antdTheme } from "antd";
import { ThemeProvider, useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

export default function ThemeInitializer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const [theme, setTheme] = useState(resolvedTheme);

  // Detect when we're on the client side
  useEffect(() => {
    setIsClient(true);

    // Safely access localStorage when the component is mounted
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
  }, [resolvedTheme ]);

  // Memoize the theme algorithm based on the current theme state
  const themeAlgorithm = useMemo(() => {
    return theme === "light"
      ? antdTheme.defaultAlgorithm
      : antdTheme.darkAlgorithm;
  }, [theme]);

  // Only render when client-side
  if (!isClient) return null;

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

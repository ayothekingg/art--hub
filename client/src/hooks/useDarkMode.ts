import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return getSystemTheme();
}

export default function useDarkMode(): [Theme, (t: Theme) => void] {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    if (localStorage.getItem("theme")) return;
    const colorSchemeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    const handleColorSchemeChange = () =>
      setTheme(colorSchemeMediaQuery.matches ? "dark" : "light");
    colorSchemeMediaQuery.addEventListener("change", handleColorSchemeChange);
    return () =>
      colorSchemeMediaQuery.removeEventListener(
        "change",
        handleColorSchemeChange
      );
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    document.body.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [
    theme,
    (t: Theme) => {
      setTheme(t);
      localStorage.setItem("theme", t);
    },
  ];
}

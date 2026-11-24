
"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("devfolio-theme");

    const initialTheme: Theme =
      savedTheme === "light" ? "light" : "dark";

    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("devfolio-theme", nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium transition hover:border-violet-400/60"
    >
      <span aria-hidden="true">
        {theme === "dark" ? "☀️" : "🌙"}
      </span>
      <span>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}

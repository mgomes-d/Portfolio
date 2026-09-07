import { useEffect, useState } from "react"
import {
  applyTheme,
  setTheme,
  THEME_STORAGE_KEY,
  themeFromSystem,
  type Theme,
} from "@/lib/theme"

function DayMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <line
        x1="4"
        y1="17"
        x2="20"
        y2="17"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="9" r="4" fill="currentColor" />
      <rect x="11.25" y="13" width="1.5" height="2.5" fill="var(--primary)" />
    </svg>
  )
}

function NightMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <line
        x1="4"
        y1="17"
        x2="20"
        y2="17"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="12"
        cy="17"
        r="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M7 17 A5 5 0 0 1 17 17 Z" fill="currentColor" />
    </svg>
  )
}

export default function ThemeToggle() {
  const [theme, setThemeState] = useState<Theme>(() =>
    typeof document === "undefined"
      ? "light"
      : document.documentElement.classList.contains("dark")
        ? "dark"
        : "light",
  )

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")

    function onSystemChange() {
      if (localStorage.getItem(THEME_STORAGE_KEY)) return
      const next = themeFromSystem()
      applyTheme(next)
      setThemeState(next)
    }

    media.addEventListener("change", onSystemChange)
    return () => media.removeEventListener("change", onSystemChange)
  }, [])

  function toggle() {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    setThemeState(next)
  }

  const label =
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme"

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex size-9 items-center justify-center text-foreground transition-colors hover:bg-muted"
    >
      {theme === "dark" ? <DayMark /> : <NightMark />}
    </button>
  )
}

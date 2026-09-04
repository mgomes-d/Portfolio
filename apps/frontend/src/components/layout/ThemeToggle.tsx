import { useEffect, useState } from "react"
import { Moon, Sun } from "@phosphor-icons/react"
import {
  applyTheme,
  setTheme,
  THEME_STORAGE_KEY,
  themeFromSystem,
  type Theme,
} from "@/lib/theme"

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
      className="inline-flex size-9 items-center justify-center rounded-md text-foreground transition-colors hover:bg-muted"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}

"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Lang, dictionary } from "./i18n"

interface PortfolioContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
  theme: "dark" | "light"
  toggleTheme: () => void
}

const PortfolioContext = createContext<PortfolioContextType | null>(null)

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  const t = (key: string) => {
    return dictionary[lang][key] || key
  }

  return (
    <PortfolioContext.Provider value={{ lang, setLang, t, theme, toggleTheme }}>
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  const context = useContext(PortfolioContext)
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider")
  }
  return context
}

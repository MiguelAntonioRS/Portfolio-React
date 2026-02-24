"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sun, Moon, Globe } from "lucide-react"
import { usePortfolio } from "@/lib/portfolio-context"

const navLinks = [
  { key: "navAbout", href: "#about" },
  { key: "navSkills", href: "#skills" },
  { key: "navProjects", href: "#projects" },
  { key: "navAchievements", href: "#achievements" },
  { key: "navContact", href: "#contact" },
]

export function Navbar() {
  const { t, lang, setLang, theme, toggleTheme } = usePortfolio()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLang = () => setLang(lang === "en" ? "es" : "en")

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 z-[1000] flex w-full items-center justify-between px-6 py-4 transition-all duration-300 ${
          scrolled
            ? "glass shadow-lg"
            : "bg-transparent"
        }`}
        style={{
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <a href="#" className="gradient-text text-xl font-bold">
          {t("navBrand")}
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wide text-foreground/70 transition-colors duration-300 hover:text-primary"
              >
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 text-foreground/70 transition-all duration-300 hover:border-primary hover:text-primary"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={toggleLang}
            className="flex h-9 items-center gap-2 rounded-lg border border-border/50 px-3 text-sm font-semibold text-foreground/70 transition-all duration-300 hover:border-primary hover:text-primary"
            aria-label="Toggle language"
          >
            <Globe size={16} />
            {t("langBtn")}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground md:hidden"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1001] bg-black/60"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="glass fixed top-0 right-0 z-[1002] flex h-full w-72 flex-col p-6"
              style={{
                background: theme === "dark" ? "rgba(10, 10, 10, 0.95)" : "rgba(255, 255, 255, 0.95)",
              }}
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex gap-2">
                  <button
                    onClick={toggleTheme}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 text-foreground/70 transition-colors hover:text-primary"
                    aria-label="Toggle theme"
                  >
                    {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                  </button>
                  <button
                    onClick={toggleLang}
                    className="flex h-9 items-center gap-2 rounded-lg border border-border/50 px-3 text-sm font-semibold text-foreground/70 transition-colors hover:text-primary"
                    aria-label="Toggle language"
                  >
                    <Globe size={16} />
                    {t("langBtn")}
                  </button>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground/70 hover:text-foreground"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              <ul className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.key}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-semibold text-foreground/70 transition-colors hover:text-primary"
                    >
                      {t(link.key)}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

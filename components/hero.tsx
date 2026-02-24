"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, FileDown } from "lucide-react"
import { usePortfolio } from "@/lib/portfolio-context"
import Image from "next/image"

export function Hero() {
  const { t } = usePortfolio()
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const fullText = t("heroGreeting")
    let i = 0
    setDisplayText("")
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 70)
    return () => clearInterval(interval)
  }, [t])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <header className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background gradient orbs */}
      <div
        className="pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #ec4899, transparent)" }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8 text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 150 }}
          className="relative"
        >
          <div className="glow-border rounded-full p-1">
            <div
              className="rounded-full p-0.5"
              style={{
                background: "linear-gradient(135deg, #6366f1, #ec4899)",
              }}
            >
              <Image
                src="/images/profile.jpg"
                alt="Miguel Antonio profile photo"
                width={160}
                height={160}
                className="rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Typing Name */}
        <div className="min-h-[3.5rem] md:min-h-[4rem]">
          <h1 className="gradient-text text-3xl font-bold md:text-5xl">
            {displayText}
            <span
              className="ml-1 inline-block w-[3px] align-middle"
              style={{
                height: "1em",
                background: "#6366f1",
                opacity: showCursor ? 1 : 0,
                transition: "opacity 0.1s",
              }}
            />
          </h1>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          {t("heroDesc")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="glow-border-hover flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-primary-foreground transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #6366f1, #ec4899)",
            }}
          >
            <Mail size={18} />
            {t("heroContact")}
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-xl border border-border/50 px-6 py-3 font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
          >
            <FileDown size={18} />
            {t("heroCV")}
          </a>
        </motion.div>
      </div>
    </header>
  )
}

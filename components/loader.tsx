"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Loader() {
  const [isLoading, setIsLoading] = useState(true)
  const [displayText, setDisplayText] = useState("")
  const fullText = "WELCOME TO MY PORTFOLIO"

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(interval)
        setTimeout(() => setIsLoading(false), 600)
      }
    }, 60)
    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "#0a0a0a" }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="h-1 rounded-full"
              style={{
                background: "linear-gradient(90deg, #6366f1, #ec4899)",
                width: "120px",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <h1
              className="text-xl font-bold tracking-[0.3em] md:text-2xl"
              style={{ color: "#f1f5f9" }}
            >
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                style={{ color: "#6366f1" }}
              >
                |
              </motion.span>
            </h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

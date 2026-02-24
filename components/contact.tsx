"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Github, Linkedin, Twitter, FileDown, ChevronDown } from "lucide-react"
import { usePortfolio } from "@/lib/portfolio-context"

const socials = [
  {
    icon: Mail,
    href: "mailto:rojassucarinomiguelantonio@gmail.com",
    label: "Email",
  },
  {
    icon: Github,
    href: "https://github.com/MiguelAntonioRS",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/miguel-antonio-rojas-sucarino-0299a42b3/",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/rojassucar0115",
    label: "Twitter",
  },
]

export function Contact() {
  const { t } = usePortfolio()
  const [cvOpen, setCvOpen] = useState(false)

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="gradient-text mb-12 text-3xl font-bold md:text-4xl"
        >
          {t("contactTitle")}
        </motion.h2>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-10 flex items-center justify-center gap-5"
        >
          {socials.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="glow-border-hover flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 text-foreground/70 transition-all duration-300 hover:border-primary hover:text-primary"
              >
                <Icon size={22} />
              </a>
            )
          })}
        </motion.div>

        {/* CV Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative inline-block"
        >
          <button
            onClick={() => setCvOpen(!cvOpen)}
            className="glow-border-hover flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-primary-foreground transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #6366f1, #ec4899)",
            }}
          >
            <FileDown size={18} />
            {t("downloadCV")}
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${cvOpen ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {cvOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="glass absolute left-1/2 z-20 mt-2 -translate-x-1/2 overflow-hidden rounded-xl"
              >
                <a
                  href="assets/pdf/CV_Miguel_Antonio_ES.pdf"
                  download
                  className="flex items-center gap-2 whitespace-nowrap px-5 py-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  <FileDown size={14} />
                  {t("spanish")} (PDF)
                </a>
                <a
                  href="assets/pdf/CV_Miguel_Antonio_EN.pdf"
                  download
                  className="flex items-center gap-2 whitespace-nowrap px-5 py-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  <FileDown size={14} />
                  {t("english")} (PDF)
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

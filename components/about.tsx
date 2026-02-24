"use client"

import { motion } from "framer-motion"
import { Code2, Server, Lightbulb } from "lucide-react"
import { usePortfolio } from "@/lib/portfolio-context"

const features = [
  { icon: Server, labelKey: "Backend" },
  { icon: Code2, labelKey: "Clean Code" },
  { icon: Lightbulb, labelKey: "Problem Solver" },
]

export function About() {
  const { t } = usePortfolio()

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="gradient-text mb-12 text-center text-3xl font-bold md:text-4xl"
        >
          {t("aboutTitle")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12 text-center text-lg leading-relaxed text-muted-foreground"
        >
          {t("aboutDesc")}
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.labelKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="glass glow-border-hover flex flex-col items-center gap-3 rounded-xl px-8 py-6 transition-all duration-300"
            >
              <feature.icon size={28} className="text-primary" />
              <span className="text-sm font-semibold text-foreground">
                {feature.labelKey}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

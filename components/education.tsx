"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"
import { usePortfolio } from "@/lib/portfolio-context"

export function Education() {
  const { t } = usePortfolio()

  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="gradient-text mb-12 text-center text-3xl font-bold md:text-4xl"
        >
          {t("educationTitle")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass glow-border-hover mx-auto flex max-w-lg flex-col items-center gap-4 rounded-2xl p-8 transition-all duration-300"
        >
          <div
            className="flex h-14 w-14 items-center justify-center rounded-xl"
            style={{ background: "linear-gradient(135deg, #6366f1, #ec4899)" }}
          >
            <GraduationCap size={28} className="text-primary-foreground" />
          </div>
          <h3 className="text-center text-lg font-bold text-foreground">
            {t("educationDegree")}
          </h3>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar size={16} />
            <span className="text-sm">{t("educationUniversity")}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

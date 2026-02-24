"use client"

import { motion } from "framer-motion"
import { usePortfolio } from "@/lib/portfolio-context"

const skills = [
  "Java",
  "Spring Boot",
  "Python",
  "Django",
  "JavaScript",
  "TypeScript",
  "Angular",
  "Golang",
  "C / C++",
  "HTML & CSS",
  "TailwindCSS",
  "Bootstrap",
  "SQL (MySQL / PostgreSQL)",
  "NoSQL (MongoDB / Cassandra)",
  "Git & GitHub",
  "Docker",
  "Postman",
  "UML (Draw / Visual Paradigm)",
]

export function Skills() {
  const { t } = usePortfolio()

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="gradient-text mb-12 text-center text-3xl font-bold md:text-4xl"
        >
          {t("skillsTitle")}
        </motion.h2>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              whileHover={{
                scale: 1.1,
                y: -4,
                boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)",
              }}
              className="cursor-default rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
              style={{
                background:
                  "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(236,72,153,0.08))",
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}

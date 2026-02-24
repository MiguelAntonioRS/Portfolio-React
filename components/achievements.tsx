"use client"

import { motion } from "framer-motion"
import { GitBranch, Briefcase, GraduationCap, Award, Code2 } from "lucide-react"
import { usePortfolio } from "@/lib/portfolio-context"

const achievements = [
  {
    textKey: "achievement5",
    authorKey: "achievement5Author",
    icon: GraduationCap,
  },
  {
    textKey: "achievement1",
    authorKey: "achievement1Author",
    icon: GitBranch,
  },
  {
    textKey: "achievement2",
    authorKey: "achievement2Author",
    icon: Briefcase,
  },
  {
    textKey: "achievement3",
    authorKey: "achievement3Author",
    icon: Code2,
  },
  {
    textKey: "achievement4",
    authorKey: "achievement4Author",
    icon: Award,
  },
]

export function Achievements() {
  const { t } = usePortfolio()

  return (
    <section id="achievements" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="gradient-text mb-12 text-center text-3xl font-bold md:text-4xl"
        >
          {t("achievementsTitle")}
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute top-0 left-6 hidden h-full w-px md:left-1/2 md:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #6366f1, #ec4899, transparent)",
            }}
          />

          <div className="flex flex-col gap-8">
            {achievements.map((achievement, i) => {
              const Icon = achievement.icon
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={achievement.textKey}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className={`relative flex items-start gap-4 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  {/* Timeline dot (desktop) */}
                  <div
                    className="absolute top-2 hidden h-3 w-3 rounded-full md:block"
                    style={{
                      background: "linear-gradient(135deg, #6366f1, #ec4899)",
                      ...(isLeft
                        ? { right: "-1.65rem" }
                        : { left: "-1.65rem" }),
                    }}
                  />

                  <div className="glass glow-border-hover flex-1 rounded-xl p-5 transition-all duration-300">
                    <div className="mb-3 flex items-center gap-3">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(236,72,153,0.15))",
                        }}
                      >
                        <Icon size={18} className="text-primary" />
                      </div>
                      <span className="text-sm font-bold text-primary">
                        {t(achievement.authorKey)}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {t(achievement.textKey)}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

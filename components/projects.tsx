"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { usePortfolio } from "@/lib/portfolio-context"

interface Project {
  titleKey: string
  descKey: string
  techStack: string[]
  github: string
  demo?: string
}

const projects: Project[] = [
  {
    titleKey: "proj1Title",
    descKey: "proj1Desc",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Thymeleaf",
      "JavaScript",
      "PostgreSQL",
      "Docker",
    ],
    github: "https://github.com/MiguelAntonioRS/Ecommerce-with-Spring",
    demo: "https://ecommerce-with-spring-boot.onrender.com/",
  },
  {
    titleKey: "proj2Title",
    descKey: "proj2Desc",
    techStack: [
      "Python",
      "Django",
      "HTML/CSS",
      "JavaScript",
      "PostgreSQL",
      "Bootstrap",
    ],
    github: "https://github.com/MiguelAntonioRS/Web-Project-Django",
  },
  {
    titleKey: "proj3Title",
    descKey: "proj3Desc",
    techStack: [
      "Java",
      "Spring Boot",
      "Angular",
      "WebSocket",
      "TypeScript",
      "RxJS",
    ],
    github: "https://github.com/MiguelAntonioRS/Chat-Spring-Angular",
  },
  {
    titleKey: "proj4Title",
    descKey: "proj4Desc",
    techStack: ["Java", "Spring Boot", "Thymeleaf", "HTML/CSS", "JavaScript"],
    github: "https://github.com/MiguelAntonioRS/BookStore-with-Spring-Boot",
  },
  {
    titleKey: "proj5Title",
    descKey: "proj5Desc",
    techStack: ["HTML", "CSS", "JavaScript", "Flexbox", "Responsive Design"],
    github: "https://github.com/MiguelAntonioRS/I-Love-Mom",
  },
  {
    titleKey: "proj6Title",
    descKey: "proj6Desc",
    techStack: ["Java", "Swing", "OOP", "Graphics", "Game Logic"],
    github: "https://github.com/MiguelAntonioRS/Space-Invaders-Game",
  },
]

export function Projects() {
  const { t } = usePortfolio()

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="gradient-text mb-12 text-center text-3xl font-bold md:text-4xl"
        >
          {t("projectsTitle")}
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.titleKey}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass glow-border-hover group flex flex-col rounded-2xl p-6 transition-all duration-300"
            >
              <h3 className="mb-3 text-xl font-bold text-foreground">
                {t(project.titleKey)}
              </h3>

              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t(project.descKey)}
              </p>

              {/* Tech stack badges */}
              <div className="mb-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-primary/20 px-2 py-1 text-xs font-medium text-primary"
                    style={{
                      background: "rgba(99,102,241,0.08)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-border/50 px-4 py-2 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  <Github size={16} />
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, #6366f1, #ec4899)",
                    }}
                  >
                    <ExternalLink size={16} />
                    {t("demoOnRender")}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

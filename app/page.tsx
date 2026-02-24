"use client"

import { PortfolioProvider } from "@/lib/portfolio-context"
import { Loader } from "@/components/loader"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Achievements } from "@/components/achievements"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <PortfolioProvider>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </PortfolioProvider>
  )
}

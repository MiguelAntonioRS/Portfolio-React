"use client"

import { usePortfolio } from "@/lib/portfolio-context"

export function Footer() {
  const { t } = usePortfolio()

  return (
    <footer className="border-t border-border/30 py-8 text-center">
      <p className="text-sm text-muted-foreground">
        {"© 2025 "}
        {t("footerText")}
      </p>
    </footer>
  )
}

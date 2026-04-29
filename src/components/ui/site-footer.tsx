export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t border-border bg-muted/40 px-6 py-12 text-sm text-muted-foreground"
      role="contentinfo"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-medium text-foreground">Southern California Energy Alternatives</p>
          <p className="mt-2 max-w-md leading-relaxed">
            Clean energy and solar solutions based in Palm Desert, California.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:text-right">
          <nav aria-label="Footer" className="flex flex-col gap-2 md:items-end">
            <a
              href="#about"
              className="underline-offset-4 hover:text-foreground hover:underline"
            >
              About
            </a>
            <a
              href="#services"
              className="underline-offset-4 hover:text-foreground hover:underline"
            >
              Services
            </a>
            <a
              href="#faq"
              className="underline-offset-4 hover:text-foreground hover:underline"
            >
              FAQ
            </a>
            <a
              href="#contact"
              className="underline-offset-4 hover:text-foreground hover:underline"
            >
              Contact
            </a>
          </nav>
          <p className="text-xs">
            © {year} SCEA / Soca Energy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

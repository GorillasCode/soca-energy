import Link from "next/link"

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#advantage", label: "Advantage" },
  { href: "/#services", label: "Services" },
  { href: "/#going-green", label: "Going Green" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
] as const

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/10 text-white shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset] backdrop-blur-xl backdrop-saturate-150 dark:border-white/10 dark:bg-white/[0.06] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset]">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 md:px-10">
        <Link
          href="/"
          className="shrink-0 font-kanturmuy text-lg font-normal tracking-tight text-white transition-opacity hover:opacity-90 dark:text-foreground"
        >
          SCEA
        </Link>
        <nav
          aria-label="Quick navigation"
          className="flex min-w-0 flex-1 justify-end overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:flex-none md:justify-end [&::-webkit-scrollbar]:hidden"
        >
          <ul className="flex items-center gap-0.5 sm:gap-1 md:gap-2">
            {navLinks.map((item) => (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  className="block rounded-lg px-2 py-2 text-xs font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white sm:px-2.5 sm:text-sm dark:text-muted-foreground dark:hover:bg-accent/50 dark:hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

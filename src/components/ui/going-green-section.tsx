const resources: { name: string; href: string }[] = [
  {
    name: "Dept. of Energy",
    href: "https://www.eere.energy.gov/",
  },
  {
    name: "Database of State Incentives for Renewables & Efficiency",
    href: "https://www.dsireusa.org/",
  },
  {
    name: "Interstate Renewable Energy Council",
    href: "https://www.irecusa.org/",
  },
  {
    name: "National Renewable Energy Laboratory",
    href: "https://www.nrel.gov/",
  },
  {
    name: "Solar Electric Power Association",
    href: "https://www.solarelectricpower.org/",
  },
  {
    name: "Solar Energy Industries Association",
    href: "https://www.seia.org/",
  },
  {
    name: "American Council on Renewable Energy",
    href: "https://www.acore.org/",
  },
  {
    name: "California Solar Energy Industries Association",
    href: "https://calseia.org/",
  },
]

export function GoingGreenSection() {
  return (
    <section
      id="going-green"
      className="border-t border-border bg-muted/30 px-6 py-20 md:px-10 md:py-28"
      aria-labelledby="going-green-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2
            id="going-green-heading"
            className="font-kanturmuy text-3xl font-normal tracking-tight text-foreground md:text-4xl"
          >
            Going Green
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Trusted references for incentives, research, and industry context.
          </p>
        </div>
        <ul className="mt-12 grid list-none gap-4 p-0 sm:grid-cols-2 xl:grid-cols-3">
          {resources.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between rounded-xl border border-border bg-background p-5 transition-colors hover:border-primary/25 hover:bg-muted/20 md:p-6"
              >
                <span className="font-medium text-foreground underline-offset-4 group-hover:underline">
                  {item.name}
                </span>
                <span className="mt-4 break-all font-mono text-xs leading-snug text-muted-foreground group-hover:text-muted-foreground/90 md:text-sm">
                  {item.href.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

import { BackgroundPathsBackdrop } from "@/components/ui/background-paths"

const services: { title: string; paragraphs: string[] }[] = [
  {
    title: "Energy Audit",
    paragraphs: [
      "SCEA will provide a complimentary energy audit with each system quote. The purpose of the energy audit is to determine if there are more cost effective means of reducing your electric bill. This allows us to build a system that covers more of your bill, without spending more money. Contact us now for a free energy audit and solar quote.",
    ],
  },
  {
    title: "Solar Electric System (Photovoltaic or PV)",
    paragraphs: [
      "A PV system captures energized particles (electrons) from the sun's irradiation through an array of modules. An inverter takes the DC power and converts it to AC power which gets delivered to your main electrical panel. The power is first delivered for household use and any excess power is then sent to the grid as a credit on your account. When the sun goes down and you draw against the meter there's a debit to your account. This process of debits and credits is called net metering.",
    ],
  },
  {
    title: "Solar Thermal: Solar Hot Water Heater",
    paragraphs: [
      "Solar Hot Water Heaters replace your current hot water heaters. Electric hot water heaters and propane hot water heaters are the most expensive water heaters to run. A solar hot water heater utilizes the energy from the sun to provide hot water for your home. A collector is installed on your roof to heat the water. Water is heated and transferred to the storage tank for daily use.",
    ],
  },
  {
    title: "Solar Thermal: Solar Pool Heater",
    paragraphs: [
      "A solar pool heater takes the ambient temperature as well as solar irradiance to create a thermal heating system. The system is sized to match the surface area of the pool. The average solar pool heater will create nearly 400,000 btu's per day. In the spring and fall months this will extend your swimming season. In the winter months, it will augment your gas pool heater. The system is built with temperature sensors that prevent the system from overheating the pool. We build our system with SunStar products. SunStar uses a gasket system that allows for expansion and contraction from the extreme heat and cold of Southern California. The gaskets prevent leaks.",
      "All systems are also installed with purge valves that allow the system to drain during the night to prevent freezing.",
    ],
  },
  {
    title: "Maintenance",
    paragraphs: [
      "SCEA provides manufacturer's warranty and workmanship warranties for the systems we build. In addition to the warranty, we provide a maintenance contract for cleaning and inspection of the systems. Routine cleaning and inspections will result in a system performing at its optimal level for a longer duration.",
    ],
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-emerald-200/70 bg-white px-6 py-20 dark:border-emerald-800/60 dark:bg-emerald-950 md:px-10 md:py-28"
      aria-labelledby="services-heading"
    >
      <BackgroundPathsBackdrop pathSvgClassName="text-emerald-600 dark:text-emerald-400" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
          <h2
            id="services-heading"
            className="font-kanturmuy text-3xl font-normal tracking-tight text-emerald-950 dark:text-emerald-50 md:text-4xl"
          >
            Services
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-emerald-800/90 dark:text-emerald-200/85 md:text-right">
            Audits, PV, thermal systems, and ongoing care — scoped to your
            property and how you use energy.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:mt-14 lg:grid-cols-2 lg:gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className={`rounded-2xl border border-emerald-200/80 bg-emerald-50/50 p-6 dark:border-emerald-800/70 dark:bg-emerald-900/25 md:p-8 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <h3 className="max-w-prose font-kanturmuy text-xl font-normal tracking-tight text-emerald-950 dark:text-emerald-50 md:text-2xl">
                {service.title}
              </h3>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-emerald-900/88 dark:text-emerald-100/85 md:text-lg">
                {service.paragraphs.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

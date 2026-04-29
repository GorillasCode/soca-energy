const advantages: { title: string; paragraphs: string[] }[] = [
  {
    title: "Consultation",
    paragraphs: [
      "Consultation is an ongoing relationship with SCEA. From the minute your communication begins, SCEA considers each and every interaction as an opportunity to enhance your solar experience. Comfort in the process and a true understanding of solar is the mantra that distinguishes SCEA from its competitors. We pride ourselves on supplying you with accurate and pertinent information on how a solar system will change your energy consumption and financial independence. By staying current on local, state, and federal tax incentives, you can rest assured that SCEA is conscious of our clients' savings. Our proprietary application uses consulting solutions coupled with financial analytics to model risk. The proposal SCEA places before you will equip you with a vast amount of tools to assist you with clear and transparent project assessment. You will walk away as an informed consumer.",
    ],
  },
  {
    title: "Design",
    paragraphs: [
      "Satellite imagery is a valued tool in assessing the physical legitimacy of sun exposure. SCEA's seasoned engineers create electrical diagrams and specifications tailored to the structure of your house while determining whether your system should be a ground mount or roof system. SCEA will process all appropriate permits.",
    ],
  },
  {
    title: "Due-Diligence",
    paragraphs: [
      "In an effort to mitigate the procurement of your project, SCEA pre-stages each step before we come to your home or business property. By exercising this due-diligence, we ensure that we address each step needed to install your system with the utmost speed and efficiency, offering the least disruption to your home or business.",
    ],
  },
  {
    title: "Installation",
    paragraphs: [
      "Solar installation issues usually occur when dealing with electricians who lack dedicated solar experience. You can rest assured that SCEA uses seasoned electricians with years of solar and construction experience. To ensure a seamless installation, once we have a signed contract in place SCEA assigns you a project manager to oversee your installation process. Your project manager is your personal step-by-step liaison who is ready to assist you through the permission to operate your system that is issued by your utility company.",
    ],
  },
  {
    title: "Monitoring and Services",
    paragraphs: [
      "Outside of the initial setup and turning the switch on your solar engine, little attention is needed for your system beyond basic cleaning. However, SCEA offers ongoing monitoring and service to ensure that your system is performing optimally.",
    ],
  },
]

export function AdvantageSection() {
  return (
    <section
      id="advantage"
      className="border-t border-border bg-muted/20 px-6 py-20 md:px-10 md:py-28"
      aria-labelledby="advantage-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="lg:grid lg:grid-cols-[minmax(0,16rem)_1fr] lg:items-start lg:gap-16 xl:gap-24">
          <header className="lg:sticky lg:top-28 lg:self-start">
            <h2
              id="advantage-heading"
              className="font-kanturmuy text-3xl font-normal tracking-tight text-foreground md:text-4xl"
            >
              Advantage
            </h2>
            <p className="mt-4 text-lg font-medium text-foreground md:text-xl">
              Working with SCEA
            </p>
            <p className="mt-6 hidden text-sm leading-relaxed text-muted-foreground lg:block">
              From first conversation through monitoring, each phase is built
              around clarity and long-term performance.
            </p>
          </header>
          <div className="relative mt-12 lg:mt-0">
            <div
              className="pointer-events-none absolute left-6 top-3 bottom-3 hidden w-px bg-border lg:block"
              aria-hidden
            />
            <ol className="list-none space-y-0 p-0">
              {advantages.map((item, index) => (
                <li key={item.title}>
                  <article className="border-t border-border py-12 first:border-t-0 first:pt-0 lg:grid lg:grid-cols-[3rem_1fr] lg:gap-8 lg:py-14 lg:first:pt-0">
                    <div className="flex lg:justify-center">
                      <span
                        className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border bg-background text-xs font-medium text-foreground"
                        aria-hidden
                      >
                        {index + 1}
                      </span>
                    </div>
                    <div className="mt-4 min-w-0 lg:mt-0">
                      <h3 className="font-kanturmuy text-xl font-normal tracking-tight text-foreground md:text-2xl">
                        {item.title}
                      </h3>
                      <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                        {item.paragraphs.map((text, i) => (
                          <p key={i}>{text}</p>
                        ))}
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

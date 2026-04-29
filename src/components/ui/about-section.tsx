export function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-emerald-200/70 bg-white px-6 py-20 dark:border-emerald-800/60 dark:bg-emerald-950 md:px-10 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-12 md:gap-x-10 md:gap-y-12 lg:gap-x-14 lg:gap-y-0">
          <div className="md:col-span-5 lg:col-span-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
              Who we are
            </p>
            <h2
              id="about-heading"
              className="mt-4 font-kanturmuy text-3xl font-normal tracking-tight text-emerald-950 dark:text-emerald-50 md:text-4xl lg:text-[2.5rem] lg:leading-tight"
            >
              About SCEA
            </h2>
            <div
              className="mt-8 hidden h-px w-16 bg-emerald-600/45 md:block dark:bg-emerald-400/35"
              aria-hidden
            />
          </div>
          <div className="md:col-span-7 lg:col-span-7 lg:col-start-6">
            <div className="space-y-6 border-l border-emerald-200 pl-6 text-base leading-relaxed text-emerald-900/88 dark:border-emerald-800 dark:text-emerald-100/85 md:border-0 md:pl-0 md:text-lg lg:max-w-2xl">
              <p>
                Southern California Energy Alternatives is based in Palm Desert,
                California. SCEA combines professionalism and workmanship in an
                affordable solar solution.
              </p>
              <p>
                We take a holistic approach to improving energy consumption. Every
                customer receives a free energy audit on their home to determine
                whether there are inefficiencies in the home.
              </p>
              <p>
                Our approach is simple. We analyze how we can create the fastest
                return on investment for our customers, share our findings, review
                our strategy and execute a whole house efficiency solution for our
                customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

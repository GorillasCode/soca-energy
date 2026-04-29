import type { ReactNode } from "react"

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "How long does it take to install a system?",
    answer:
      "Construction time is 3-7 days on an average home. Depending on the financing used, the process can take up to 2-6 weeks from signed contract to permission to operate.",
  },
  {
    question: "How long will a system work?",
    answer:
      "A typical PV system is estimated to work for nearly 35 years. There is a degradation of power production of half a percent per year. The panels have a warranty for 25 years. Some inverters have a 25 year warranty as well. Proper maintenance must be provided to achieve a longer lifespan.",
  },
  {
    question: "How Does Net Metering Work?",
    answer:
      "Net Metering is a relationship between the host customer and the Utility. Grid Tied PV solar provides power for consumption of the home first. At any given time, if the production exceeds the household consumption, the remaining production will be sent to the Utility and your meter will account for it. Any usage above production, will be accounted for on the meter as well. At the end of the billing period, you will receive a statement, showing a net consumption for that period. If it is a positive number you will owe the utility. If it is a negative number, the utility will owe you. You have the option for monthly or yearly net metering. A yearly net metering will show a cumulative net consumption for the year.",
  },
  {
    question: "Does solar really make sense?",
    answer:
      "Yes. Depending on how the system is financed, will determine the payback timeframe or amount. Payback on a purchased system will be determined by the total cost, minus rebate and tax benefit, giving you a net cost. The net cost is then used against what would have been spent on kWhs saved, taking into account the utility pricing and rate increases. Our typical system yields a 5-7 year payback. In the instance of a lease/PPA, the customer pays less for the kWh the system produces over the course of the term of the lease. IE: If the kWhs that the system removes from the utility’s rate structure are saving $.36 per kWh(current rate 5 of SCE) and the customer is leasing a system that averages $.17 per kWh, the net savings is $.19 per kWh it produces in rate 5. If this is 1000 kWh per month, the system would save $170 per month, year 1. History has proven that the Utility will out raise even the highest lease rate escalator.",
  },
  {
    question: "Will this raise the property value of my home?",
    answer: (
      <>
        Yes, go to{" "}
        <a
          href="https://www.gosolarcalifornia.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-emerald-800 underline-offset-4 hover:text-emerald-950 hover:underline"
        >
          gosolarcalifornia.org
        </a>{" "}
        to estimate your increase in property value increase by installing solar
        on your home. The estimate is based on your savings on your electric
        bill compared to the same house without solar. The amount is significant
        and justifiable.
      </>
    ),
  },
  {
    question: "Is it better to Purchase, Property Tax Finance or Lease/PPA?",
    answer:
      "This depends on the customer’s financial situation. The purchase will almost always yield the best return (no financing costs). This customer must weigh the opportunity costs associated with forgoing other investments to implement solar. IE: If a customer can invest $40,000 into a business/stock/etc., and receive a return of 28% on their money and solar will only return a 18% return on their money, it would be better to do a zero down Lease/PPA or low interest loan. In the instance that a customer does not have cash or great credit a Property Tax Loan will be best.",
  },
]

export function FaqSection() {
  return (
    <section
      id="faq"
      className="border-t border-emerald-200 bg-white px-6 py-20 text-emerald-950 md:px-10 md:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="faq-heading"
          className="max-w-xl font-kanturmuy text-3xl font-normal tracking-tight text-emerald-950 md:text-4xl"
        >
          FAQs (Frequently Asked Questions)
        </h2>
        <dl className="mt-12 space-y-4 md:mt-14">
          {faqs.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 md:grid md:grid-cols-[minmax(0,38%)_1fr] md:gap-x-10 md:gap-y-2 md:p-8"
            >
              <dt className="text-base font-semibold text-emerald-950 md:text-lg">
                <span className="mr-2 text-emerald-700">Q</span>
                {item.question}
              </dt>
              <dd className="mt-4 text-base leading-relaxed text-emerald-900 md:mt-0 md:border-l md:border-emerald-200 md:pl-10 md:text-lg">
                <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-emerald-800 md:hidden">
                  Answer
                </span>
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

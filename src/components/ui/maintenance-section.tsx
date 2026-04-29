/**
 * Gantry modal embed: buttons need `gantry-pay-button` + `data-embed-id` and the
 * bundle below (init on document). CSP (e.g. Vercel) must allow
 * `script-src` and `frame-src` for `https://uat.gantrypay.com`.
 *
 * `data-price`: values &lt; 100 are treated as whole USD; ≥ 100 as cents.
 * We pass cents for every plan (9900 → $99) so Standard/Premium are correct.
 */
import Script from "next/script"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ClipboardCheck, Droplets, ShieldCheck } from "lucide-react"
import type { ReactNode } from "react"

const GANTRY_EMBED_ID = "69f24eac578f6aa6d23fe631"
const GANTRY_CHECKOUT_ORIGIN = "https://uat.gantrypay.com"
const GANTRY_MODAL_SCRIPT_SRC =
  "https://uat.gantrypay.com/gantry-embed-modal.js"

function formatUsdFromCents(cents: number): string {
  if (!Number.isFinite(cents)) return String(cents)
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(cents / 100)
}

const gantryButtonClassName =
  "gantry-pay-button mt-4 inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-emerald-900 bg-emerald-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"

const plans = [
  {
    label: "Basic",
    description:
      "Essential cleaning and inspection cadence to keep production predictable.",
    priceCents: 9_900,
    billingNote: "per month",
    modalTitle: "Basic maintenance — pay with card",
    icon: Droplets,
  },
  {
    label: "Standard",
    description:
      "Expanded coverage for typical residential PV and thermal systems.",
    priceCents: 19_900,
    billingNote: "per month",
    modalTitle: "Standard maintenance — pay with card",
    icon: ClipboardCheck,
  },
  {
    label: "Premium",
    description:
      "Priority scheduling and comprehensive checks for peak performance.",
    priceCents: 29_900,
    billingNote: "per month",
    modalTitle: "Premium maintenance — pay with card",
    icon: ShieldCheck,
  },
] as const

export function MaintenanceSection() {
  return (
    <>
      <Script
        src={GANTRY_MODAL_SCRIPT_SRC}
        strategy="afterInteractive"
      />
    <section
      id="maintenance"
      className="border-t border-emerald-200/90 bg-white py-16 dark:border-emerald-200/80 dark:bg-white md:py-32"
      aria-labelledby="maintenance-heading"
    >
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2
            id="maintenance-heading"
            className="text-balance font-kanturmuy text-4xl font-normal tracking-tight text-emerald-950 lg:text-5xl"
          >
            Maintenance &amp; care
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-neutral-800">
            SCEA provides manufacturer&apos;s and workmanship warranties on the
            systems we build. Our maintenance contracts cover cleaning and
            inspection so your array stays efficient longer.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            Maintenance subscription — select a plan for secure card checkout in
            a modal.
          </p>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16 md:max-w-none">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <Card
                key={plan.label}
                className="group flex flex-col border border-emerald-100 bg-white shadow-sm dark:border-emerald-200/90 dark:bg-white"
              >
                <CardHeader className="pb-3">
                  <CardDecorator>
                    <Icon className="size-6 text-emerald-800" aria-hidden />
                  </CardDecorator>
                  <h3 className="mt-6 font-semibold text-emerald-950">
                    {plan.label}
                  </h3>
                  <p className="mt-3 font-kanturmuy text-3xl font-normal tracking-tight text-emerald-950">
                    {formatUsdFromCents(plan.priceCents)}
                  </p>
                  <p className="mt-1 text-xs font-medium text-neutral-600">
                    {plan.billingNote}
                  </p>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col pt-0">
                  <p className="grow text-sm leading-relaxed text-neutral-700">
                    {plan.description}
                  </p>
                  <button
                    type="button"
                    className={gantryButtonClassName}
                    data-embed-id={GANTRY_EMBED_ID}
                    data-checkout-origin={GANTRY_CHECKOUT_ORIGIN}
                    data-price={String(plan.priceCents)}
                    data-modal-title={plan.modalTitle}
                    data-iframe-height="520"
                  >
                    Pay with card
                  </button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
    </>
  )
}

function CardDecorator({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden
      className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.14] [--border:oklch(0.25_0.05_160)]" />
      <div className="absolute inset-0 m-auto flex size-12 items-center justify-center border border-emerald-200/90 bg-white">
        {children}
      </div>
    </div>
  )
}

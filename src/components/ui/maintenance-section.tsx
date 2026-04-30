/**
 * Gantry Pay — Pay button (modal). Paste the script once per page; here it loads in root
 * `src/app/layout.tsx` loads `gantry-embed-modal.js` once (same as HTML `<script defer>`).
 *
 * If your site uses CSP, allow `script-src` and `frame-src` for the Gantry host: in
 * `next dev` default is `http://localhost:5173` (local RTP); production default is UAT
 * `https://uat.gantrypay.com`. Override with `NEXT_PUBLIC_GANTRY_ORIGIN`. CSP: `next.config.ts`.
 *
 * Vercel (`vercel.json`): headers on your **merchant** site so the parent may load script +
 * iframe, e.g.
 *   {"source":"/(.*)","headers":[{"key":"Content-Security-Policy","value":"frame-src https://uat.gantrypay.com https:; script-src 'self' 'unsafe-inline' https://uat.gantrypay.com; connect-src 'self' https://uat.gantrypay.com https:"}]}
 * Adjust `connect-src` if your API host differs; tighten `https:` once confirmed.
 *
 * Optional on `<button>`: data-amount|data-price, data-primary-color|data-color, data-policy-id,
 * data-reference-number, data-theme-id, data-logo, data-preview
 * Modal-only: data-modal-width, data-modal-max-height, data-iframe-height (e.g. 520 or 520px),
 * data-modal-title
 * For multiple concurrent checkouts with the same embed (e.g. variable amount), enable
 * “Multiple concurrent checkouts” on RTP Embeds config.
 *
 * Dev embed id / origin: local snippet on `:5173`. Prod embed id from Gantry production
 * snippet; prod script/checkout stay `https://uat.gantrypay.com` (not localhost). Blank iframe: Network tab
 * on the Gantry host — final URL should be `/embed/{id}` not `/`; see `next.config.ts` for CSP.
 */
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { GANTRY_ORIGIN } from "@/lib/gantry"
import { ClipboardCheck, Droplets, ShieldCheck } from "lucide-react"
import type { LucideIcon } from "lucide-react"
/** Production build (`next build` / deployed) — Gantry `data-embed-id` for prod RTP. */
const GANTRY_EMBED_ID_PRODUCTION = "69f2b1a355691f834ad3ec08"
/** Local `next dev` — RTP embed when checkout/script run on `http://localhost:5173`. */
const GANTRY_EMBED_ID_DEVELOPMENT = "69f29aec55691f834ad3ebc7"
const GANTRY_EMBED_ID =
  process.env.NODE_ENV === "production"
    ? GANTRY_EMBED_ID_PRODUCTION
    : GANTRY_EMBED_ID_DEVELOPMENT

function usd(cents: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(cents / 100)
}

const plans: {
  label: string
  description: string
  priceCents: number
  billingNote: string
  modalTitle: string
  icon: LucideIcon
}[] = [
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
]

const payButtonClass =
  "gantry-pay-button mt-4 inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-emerald-900 bg-emerald-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"

export function MaintenanceSection() {
  return (
    <section
      id="maintenance"
      className="border-t border-emerald-200/90 bg-white py-16 dark:border-emerald-200/80 dark:bg-white md:py-32"
      aria-labelledby="maintenance-heading"
    >
      <div className="@container mx-auto max-w-5xl px-6">
        <header className="text-center">
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
          <p className="mt-2 text-sm text-neutral-600">
            Choose a plan — secure card checkout opens in a modal.
          </p>
        </header>

        <ul className="@min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm list-none gap-6 *:text-center md:mt-16 md:max-w-none">
          {plans.map((plan) => {
            const Icon = plan.icon
            return (
              <li key={plan.label}>
                <Card className="flex h-full flex-col border border-emerald-100 bg-white shadow-sm dark:border-emerald-200/90 dark:bg-white">
                  <CardHeader className="pb-3">
                    <div
                      className="mx-auto flex size-12 items-center justify-center rounded-lg border border-emerald-200/90 bg-white"
                      aria-hidden
                    >
                      <Icon className="size-6 text-emerald-800" />
                    </div>
                    <h3 className="mt-6 font-semibold text-emerald-950">
                      {plan.label}
                    </h3>
                    <p className="mt-3 font-kanturmuy text-3xl font-normal tracking-tight text-emerald-950">
                      {usd(plan.priceCents)}
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
                      className={payButtonClass}
                      data-embed-id={GANTRY_EMBED_ID}
                      data-checkout-origin={GANTRY_ORIGIN}
                      data-price={String(plan.priceCents)}
                      data-modal-title={plan.modalTitle}
                      data-iframe-height="520"
                      data-modal-max-height="720"
                    >
                      Pay with card
                    </button>
                  </CardContent>
                </Card>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

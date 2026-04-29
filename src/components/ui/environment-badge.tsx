function isDisplayEnabled() {
  const v = process.env.NEXT_PUBLIC_DISPLAY_ENVIRONMENT?.toLowerCase().trim()
  return v === "true" || v === "1" || v === "yes"
}

function environmentLabel() {
  const custom = process.env.NEXT_PUBLIC_APP_ENV?.trim()
  if (custom) return custom
  if (process.env.VERCEL_ENV) return process.env.VERCEL_ENV
  return process.env.NODE_ENV ?? "unknown"
}

function badgeTone(label: string) {
  const key = label.toLowerCase()
  if (key === "development") return "bg-amber-600 text-white"
  if (key === "production") return "bg-neutral-800 text-white dark:bg-neutral-200 dark:text-neutral-900"
  if (key === "preview") return "bg-violet-700 text-white"
  return "bg-neutral-700 text-white dark:bg-neutral-300 dark:text-neutral-900"
}

/**
 * Fixed corner badge when `NEXT_PUBLIC_DISPLAY_ENVIRONMENT` is `true`, `1`, or `yes`.
 * Label order: `NEXT_PUBLIC_APP_ENV`, then `VERCEL_ENV`, then `NODE_ENV`.
 */
export function EnvironmentBadge() {
  if (!isDisplayEnabled()) return null

  const label = environmentLabel()

  return (
    <div
      className={`pointer-events-none fixed bottom-4 left-4 z-[100] rounded-md px-2.5 py-1 text-[10px] font-mono font-medium uppercase tracking-wider shadow-lg ${badgeTone(label)}`}
      role="status"
      aria-live="polite"
      aria-label={`Application environment: ${label}`}
    >
      {label}
    </div>
  )
}

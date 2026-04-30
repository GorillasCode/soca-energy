import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";
/** Match `src/lib/gantry.ts`: local RTP in dev, UAT in prod builds. */
const GANTRY_ORIGIN_DEFAULT = isDev
  ? "http://localhost:5173"
  : "https://uat.gantrypay.com";

const gantryOrigin = (
  process.env.GANTRY_ORIGIN ??
  process.env.NEXT_PUBLIC_GANTRY_ORIGIN ??
  GANTRY_ORIGIN_DEFAULT
).replace(/\/$/, "");

const GANTRY_UAT = gantryOrigin;
const gantryHost = gantryOrigin.replace(/^https?:\/\//, "");
const gantryWs = gantryOrigin.startsWith("http://")
  ? `ws://${gantryHost}`
  : `wss://${gantryHost}`;
/**
 * In `next dev`, script/checkout default to localhost but the iframe may still load UAT
 * (embed config). List UAT explicitly so CSP is never the blocker for that hybrid.
 */
const GANTRY_REMOTE =
  "https://uat.gantrypay.com https://*.gantrypay.com wss://uat.gantrypay.com wss://*.gantrypay.com";
const GANTRY_SRC = isDev
  ? `${gantryOrigin} ${gantryWs} ${GANTRY_REMOTE}`
  : `${gantryOrigin} https://*.gantrypay.com ${gantryWs} wss://*.gantrypay.com`;

/**
 * Vercel injects Live / feedback from `vercel.live`. Prefer `VERCEL === "1"` over
 * `VERCEL_ENV === "preview"` — `next.config` is often evaluated without the latter,
 * which produced deployments whose CSP still blocked `vercel.live`.
 */
const VERCEL_LIVE_SRC = process.env.VERCEL === "1" ? " https://vercel.live" : "";

/**
 * Who may embed this app in an iframe (`frame-ancestors`). Always includes `'self'`.
 * Set `FRAME_ANCESTOR_ORIGINS` to space-separated HTTPS origins (e.g. `https://meusite.com`).
 */
function buildFrameAncestors(): string {
  const raw = process.env.FRAME_ANCESTOR_ORIGINS?.trim();
  if (!raw) return "'self'";
  const origins = raw.split(/\s+/).filter(Boolean);
  return ["'self'", ...origins].join(" ");
}

/**
 * Baseline CSP so Gantry modal script + checkout iframe load from UAT.
 * If Vercel (or another layer) also sends CSP, policies combine (stricter wins) — align both.
 * @see Gantry embed docs (script-src + frame-src for your Gantry host; dev: localhost:5173)
 */
const imgSrcExtras = isDev ? " http://localhost:5173" : "";
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' 'unsafe-eval' ${GANTRY_SRC}${VERCEL_LIVE_SRC}`,
  "style-src 'self' 'unsafe-inline'",
  `img-src 'self' data: blob: https:${imgSrcExtras}`,
  "font-src 'self' data: https://fonts.gstatic.com",
  `connect-src 'self' ${GANTRY_SRC}${VERCEL_LIVE_SRC}`,
  `frame-src 'self' ${GANTRY_SRC}${VERCEL_LIVE_SRC}`,
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  `form-action 'self' ${GANTRY_UAT} https://uat.gantrypay.com https://*.gantrypay.com`,
  `frame-ancestors ${buildFrameAncestors()}`,
].join("; ");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: contentSecurityPolicy,
          },
        ],
      },
    ];
  },
};

export default nextConfig;

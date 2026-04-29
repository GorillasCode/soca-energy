import type { NextConfig } from "next";

const GANTRY_UAT = "https://uat.gantrypay.com";
/** UAT + subdomains + WebSockets (checkout sometimes uses wss / API hosts). */
const GANTRY_SRC =
  "https://uat.gantrypay.com https://*.gantrypay.com wss://uat.gantrypay.com wss://*.gantrypay.com";

/**
 * Baseline CSP so Gantry modal script + checkout iframe load from UAT.
 * If Vercel (or another layer) also sends CSP, policies combine (stricter wins) — align both.
 * @see https://uat.gantrypay.com embed docs (script-src + frame-src for Gantry host)
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' 'unsafe-eval' ${GANTRY_SRC}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://fonts.gstatic.com",
  `connect-src 'self' ${GANTRY_SRC}`,
  `frame-src 'self' ${GANTRY_SRC}`,
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  `form-action 'self' ${GANTRY_UAT} https://*.gantrypay.com`,
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
        source: "/:path*",
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

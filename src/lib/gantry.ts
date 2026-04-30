const LOCAL_GANTRY_DEV = "http://localhost:5173";
const DEFAULT_UAT = "https://uat.gantrypay.com";

/**
 * Gantry checkout / script host (no trailing slash).
 * `next dev`: default `http://localhost:5173` (local RTP / Vite per Gantry snippet).
 * Production build: default UAT. Override anytime with `NEXT_PUBLIC_GANTRY_ORIGIN`.
 */
function resolveGantryOrigin(): string {
  const env = process.env.NEXT_PUBLIC_GANTRY_ORIGIN?.trim();
  if (env) return env.replace(/\/$/, "");
  return process.env.NODE_ENV === "development"
    ? LOCAL_GANTRY_DEV
    : DEFAULT_UAT;
}

export const GANTRY_ORIGIN = resolveGantryOrigin();

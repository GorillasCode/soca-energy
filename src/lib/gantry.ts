/** Gantry Pay checkout / script host (no trailing slash). */
export const GANTRY_ORIGIN = (
  process.env.NEXT_PUBLIC_GANTRY_ORIGIN ?? "https://uat.gantrypay.com"
).replace(/\/$/, "");

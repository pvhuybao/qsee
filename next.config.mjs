/**
 * next-auth/react parses NEXTAUTH_URL at module load; empty string or invalid
 * values cause `new URL(...)` to throw during static prerender (e.g. Vercel).
 */
function isUsableAbsoluteUrl(value) {
  if (typeof value !== "string") return false;
  const v = value.trim();
  if (!v) return false;
  try {
    const u = new URL(v);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

function ensureNextAuthUrl() {
  const internal = process.env.NEXTAUTH_URL_INTERNAL;
  if (typeof internal === "string" && !internal.trim()) {
    delete process.env.NEXTAUTH_URL_INTERNAL;
  }

  const raw = process.env.NEXTAUTH_URL;
  const trimmed = typeof raw === "string" ? raw.trim() : raw;
  if (isUsableAbsoluteUrl(trimmed)) {
    process.env.NEXTAUTH_URL = trimmed;
    return;
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//i, "").replace(/\/$/, "");
    process.env.NEXTAUTH_URL = `https://${host}`;
    return;
  }

  process.env.NEXTAUTH_URL = "http://localhost:3000";
}

ensureNextAuthUrl();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

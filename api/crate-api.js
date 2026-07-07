const REQUEST_TIMEOUT_MS = 90 * 1000;

function sendCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-openapi-token");
}

function normalizeBaseUrl(value) {
  return String(value || "").replace(/\/$/, "");
}

function getCrateEnv() {
  if (process.env.CRATE_ENV) return process.env.CRATE_ENV;
  return process.env.VERCEL_ENV === "production" ? "production" : "staging";
}

function getCrateApiBase() {
  if (process.env.CRATE_API_BASE) return normalizeBaseUrl(process.env.CRATE_API_BASE);
  return getCrateEnv() === "production"
    ? "https://crate.tiktok-row.net/api"
    : "https://crate-staging.tiktok-row.net/api";
}

function getTargetPath(req) {
  const rawPath = Array.isArray(req.query.path) ? req.query.path.join("/") : String(req.query.path || "");
  const targetPath = rawPath.startsWith("/") ? rawPath : `/${rawPath}`;
  return targetPath === "/" ? "" : targetPath;
}

module.exports = async function handler(req, res) {
  sendCors(res);

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST" && req.method !== "GET") {
    res.status(405).json({ error: "method not allowed" });
    return;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  const headers = { "Content-Type": "application/json" };
  const token = req.headers["x-openapi-token"];
  if (token) headers["x-openapi-token"] = Array.isArray(token) ? token[0] : token;

  try {
    const response = await fetch(`${getCrateApiBase()}${getTargetPath(req)}`, {
      method: req.method,
      headers,
      body: req.method === "POST" ? JSON.stringify(req.body || {}) : undefined,
      signal: controller.signal,
    });
    const text = await response.text();
    res.status(response.status);
    res.setHeader("Content-Type", response.headers.get("content-type") || "application/json");
    res.send(text);
  } catch (error) {
    const isTimeout = error?.name === "AbortError";
    res.status(isTimeout ? 504 : 502).json({ error: isTimeout ? "Crate request timed out." : String(error.message || error) });
  } finally {
    clearTimeout(timer);
  }
};

const REQUEST_TIMEOUT_MS = 90 * 1000;

function sendCors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, x-openapi-token");
}

function normalizeBaseUrl(value) {
  return String(value || "").replace(/\/$/, "");
}

function getTargetPath(req) {
  const path = req.query.path;
  const parts = Array.isArray(path) ? path : [path].filter(Boolean);
  return `/${parts.map((part) => encodeURIComponent(part)).join("/")}`;
}

module.exports = async function handler(req, res) {
  sendCors(res);

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "method not allowed" });
    return;
  }

  const crateApiBase = normalizeBaseUrl(process.env.CRATE_API_BASE);
  if (!crateApiBase) {
    res.status(500).json({ error: "CRATE_API_BASE is not configured on the server." });
    return;
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  const headers = { "Content-Type": "application/json" };
  const token = req.headers["x-openapi-token"];
  if (token) headers["x-openapi-token"] = Array.isArray(token) ? token[0] : token;

  try {
    const response = await fetch(`${crateApiBase}${getTargetPath(req)}`, {
      method: "POST",
      headers,
      body: JSON.stringify(req.body || {}),
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

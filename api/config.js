module.exports = function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  res.status(200).json({
    crateApiBase: "/api/crate-api",
    crateApprovalOrigin: process.env.CRATE_APPROVAL_ORIGIN || getCrateOrigin(),
    crateModelId: process.env.CRATE_MODEL_ID || "gemini-2.5-pro",
  });
};

function getCrateEnv() {
  if (process.env.CRATE_ENV) return process.env.CRATE_ENV;
  return process.env.VERCEL_ENV === "production" ? "production" : "staging";
}

function getCrateBaseUrl() {
  if (process.env.CRATE_API_BASE) return process.env.CRATE_API_BASE;
  return getCrateEnv() === "production"
    ? "https://crate.tiktok-row.net/api"
    : "https://crate-staging.tiktok-row.net/api";
}

function getCrateOrigin() {
  return getCrateBaseUrl().replace(/\/api\/?$/, "");
}

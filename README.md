# Query Campaign Screener

A lightweight local web app for screening UGC campaign query candidates. It reads pasted or uploaded query tables, cleans unusable queries, scores campaign potential, clusters qualified queries into campaign-level groups, and generates bilingual campaign title references.

## Features

- CSV / TSV / TXT input or direct paste
- Query cleaning with safety and quality filters
- Multi-dimension campaign scoring
- Campaign cluster output instead of single-query output
- Query detail filters for `90+`, `80-89`, and `70-79`
- Bilingual campaign title references
- Dynamic Crate API proxy for hosted usage

## Run Locally

Start the local proxy if you are testing on your own machine. By default it uses Crate staging:

```bash
python3 backend/server.py
```

Then open:

```text
http://127.0.0.1:5180
```

You can also open `index.html` directly. In that mode the frontend expects the proxy at `http://127.0.0.1:5180/crate-api`.

## Deploy as a Dynamic Website

GitHub Pages only serves static files and cannot run the Crate proxy. For a shareable link that other people can use directly, deploy this repository to Vercel, Render, or another host that can run API/server code.

### Vercel

This repository includes Vercel serverless API routes:

- `/api/config`
- `/api/crate-api/*`

By default the Vercel API proxy uses:

- staging: `https://crate-staging.tiktok-row.net/api`
- production: `https://crate.tiktok-row.net/api`

Optional environment variables:

- `CRATE_ENV`: `staging` or `production`; defaults to staging unless `VERCEL_ENV=production`.
- `CRATE_API_BASE`: override the Crate API base URL.
- `CRATE_APPROVAL_ORIGIN`: override the approval host; otherwise derived from the API base.
- `CRATE_MODEL_ID`: override the model; defaults to `gemini-2.5-pro`.

After deployment, users open the Vercel URL and use the app directly. The frontend calls `/api/crate-api`, and the serverless API forwards requests to Crate.

### Local / Render-style Python Server

The Python server also supports dynamic deployment. It serves the frontend and proxies Crate requests under `/crate-api`.

Required environment variables:

- none for staging

Optional environment variables:

- `CRATE_ENV`
- `CRATE_API_BASE`
- `CRATE_APPROVAL_ORIGIN`
- `CRATE_MODEL_ID`
- `PORT` if your host provides one

## Configuration

The backend/serverless API reads:

- `CRATE_API_BASE`: API base URL used by the proxy.
- `CRATE_APPROVAL_ORIGIN`: approval origin for the pairing flow.
- `CRATE_MODEL_ID`: Crate model used for Gemini text calls.

The frontend reads:

- `/api/config`: dynamic deployment config.
- `window.APP_CONFIG.CRATE_API_BASE`: optional local override.
- `window.APP_CONFIG.CRATE_APPROVAL_ORIGIN`: optional local override.

For local customization, create a `config.local.js` file and load it before `app.js` if needed:

```js
window.APP_CONFIG = {
  CRATE_API_BASE: "https://your-api.example.com/crate-api",
  CRATE_APPROVAL_ORIGIN: "https://your-approval-origin.example.com",
  CRATE_MODEL_ID: "gemini-2.5-pro"
};
```

`config.local.js` is ignored by Git.

## Notes

Keep private credentials in deployment environment variables. Do not hard-code tokens or Crate secrets in frontend files.

# Query Campaign Screener

A lightweight local web app for screening UGC campaign query candidates. It reads pasted or uploaded query tables, cleans unusable queries, scores campaign potential, clusters qualified queries into campaign-level groups, and generates bilingual campaign title references.

## Features

- CSV / TSV / TXT input or direct paste
- Query cleaning with safety and quality filters
- Multi-dimension campaign scoring
- Campaign cluster output instead of single-query output
- Query detail filters for `90+`, `80-89`, and `70-79`
- Bilingual campaign title references
- Configurable Crate API connection for public static pages

## Run Locally

Start the local proxy if you are testing on your own machine:

```bash
CRATE_API_BASE="https://your-api-host.example.com/api" python3 backend/server.py
```

Then open:

```text
http://127.0.0.1:5180
```

You can also open `index.html` directly. In that mode the frontend expects the proxy at `http://127.0.0.1:5180/crate-api`.

## Public Page / GitHub Pages

The frontend is static and can be hosted on GitHub Pages. A public static page cannot call a local `127.0.0.1` Crate proxy on another person's computer, so the page includes a **公开网页 Crate 连接配置** section.

Fill in:

- `Crate API Base`: a public HTTPS Crate API/proxy base, for example `https://your-api.example.com/crate-api`
- `Approval Origin`: the Crate approval host used by the pairing flow

The browser will save these values locally and use them for subsequent Gemini / Crate requests.

## Configuration

The backend reads:

- `CRATE_API_BASE`: API base URL used by the local proxy.

The frontend reads:

- `window.APP_CONFIG.CRATE_API_BASE`: optional default Crate API/proxy base for hosted pages.
- `window.APP_CONFIG.CRATE_APPROVAL_ORIGIN`: approval origin for the pairing flow.

For local customization, create a `config.local.js` file and load it before `app.js` if needed:

```js
window.APP_CONFIG = {
  CRATE_API_BASE: "https://your-api.example.com/crate-api",
  CRATE_APPROVAL_ORIGIN: "https://your-approval-origin.example.com"
};
```

`config.local.js` is ignored by Git.

## Notes

This project is designed as a local prototype. Review any model/API provider settings before deploying publicly.

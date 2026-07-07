# Query Campaign Screener Frontend

Frontend-only static page for the Query Campaign Screener.

## Files

- index.html
- styles.css
- app.js

## API configuration

This frontend can be connected to an external API proxy by defining `window.APP_CONFIG.CRATE_API_BASE` before loading `app.js`.

Example:

```html
<script>
window.APP_CONFIG = {
  CRATE_API_BASE: "https://your-api.example.com/crate-api",
  CRATE_APPROVAL_ORIGIN: "https://your-approval-origin.example.com"
};
</script>
```

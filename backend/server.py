from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen
import json
import os


ROOT = Path(__file__).resolve().parents[1]
CRATE_API_BASE = os.environ.get("CRATE_API_BASE", "https://example.com/api")
CRATE_APPROVAL_ORIGIN = os.environ.get("CRATE_APPROVAL_ORIGIN", "")


class QueryScreenerHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, x-openapi-token")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_GET(self):
        if self.path == "/api/health":
            self._send_json(200, {"ok": True})
            return
        if self.path == "/api/config":
            self._send_json(200, {
                "crateApiBase": "/crate-api",
                "crateApprovalOrigin": CRATE_APPROVAL_ORIGIN,
            })
            return
        if self.path == "/crate-api" or self.path == "/crate-api/":
            self.send_response(302)
            self.send_header("Location", "/index.html")
            self.end_headers()
            return
        if self.path == "/":
            self.path = "/index.html"
        super().do_GET()

    def do_POST(self):
        if self.path.startswith("/crate-api/"):
            self._proxy_crate()
            return
        self._send_json(404, {"error": "not found"})

    def _proxy_crate(self):
        body = self.rfile.read(int(self.headers.get("Content-Length", "0") or "0"))
        target_path = self.path.replace("/crate-api", "", 1)
        headers = {"Content-Type": "application/json"}
        token = self.headers.get("x-openapi-token")
        if token:
            headers["x-openapi-token"] = token

        request = Request(
            f"{CRATE_API_BASE}{target_path}",
            data=body,
            headers=headers,
            method="POST",
        )
        try:
            with urlopen(request, timeout=90) as response:
                payload = response.read()
                self.send_response(response.status)
                self.send_header("Content-Type", response.headers.get("Content-Type", "application/json"))
                self.end_headers()
                self.wfile.write(payload)
        except HTTPError as error:
            payload = error.read()
            self.send_response(error.code)
            self.send_header("Content-Type", error.headers.get("Content-Type", "application/json"))
            self.end_headers()
            self.wfile.write(payload)
        except URLError as error:
            self._send_json(502, {"error": str(error.reason)})

    def _send_json(self, status, payload):
        data = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)


if __name__ == "__main__":
    host = os.environ.get("HOST", "127.0.0.1")
    port = int(os.environ.get("PORT", "5180"))
    server = ThreadingHTTPServer((host, port), QueryScreenerHandler)
    print(f"Query screener running at http://{host}:{port}")
    server.serve_forever()

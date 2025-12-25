from http.server import HTTPServer, BaseHTTPRequestHandler
import json

counter = 42  # Starting value

class CounterHandler(BaseHTTPRequestHandler):
    def do_GET(self) -> None:
        global counter
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(json.dumps({"count": counter}).encode())

    def do_POST(self) -> None:
        global counter
        content_length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_length)
        data = json.loads(body)
        counter = data.get("count", counter)
        
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(json.dumps({"count": counter}).encode())

    def do_OPTIONS(self) -> None:
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

if __name__ == "__main__":
    server = HTTPServer(("localhost", 3001), CounterHandler)
    print("Mock counter server running on http://localhost:3001")
    server.serve_forever()
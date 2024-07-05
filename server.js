const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const filePath = req.url.startsWith("/assets/") ? path.join(__dirname, req.url) :
    req.url === "/" ? path.join(__dirname, "index.html") :
      req.url === "/styles.css" ? path.join(__dirname, "styles.css") :
        req.url === "/modal.js" ? path.join(__dirname, "modal.js") :
          req.url === "/script.js" ? path.join(__dirname, "script.js") :
            null;

  filePath ? fs.readFile(filePath, (err, content) => {
    const ext = path.extname(filePath);
    const contentType = {
      '.html': "text/html",
      '.css': "text/css",
      '.js': "application/javascript",
      '.png': "image/png",
      '.jpg': "image/jpeg",
      '.jpeg': "image/jpeg",
      '.svg': "image/svg+xml"
    }[ext] || "text/plain";

    err ? (res.writeHead(404), res.end("Asset not found")) :
      (res.writeHead(200, { "Content-Type": contentType }), res.end(content));
  }) :
    (res.writeHead(404), res.end("Not Found"));
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
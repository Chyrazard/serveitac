const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve("/var/www/domoteknik");
const port = Number(process.env.PORT || 3020);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function sendFile(request, response, filePath, statusCode = 200) {
  const extension = path.extname(filePath).toLowerCase();
  const immutable = filePath.includes(`${path.sep}_next${path.sep}static${path.sep}`);

  response.writeHead(statusCode, {
    "Content-Type": contentTypes[extension] || "application/octet-stream",
    "Cache-Control": immutable
      ? "public, max-age=2592000, immutable"
      : "public, max-age=300",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "SAMEORIGIN",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  });

  if (request.method === "HEAD") {
    response.end();
    return;
  }

  fs.createReadStream(filePath).pipe(response);
}

function resolveFile(urlPath) {
  const normalized = path.posix.normalize(urlPath).replace(/^\/+/, "");
  const requested = path.resolve(root, normalized);

  if (requested !== root && !requested.startsWith(`${root}${path.sep}`)) {
    return null;
  }

  if (fs.existsSync(requested)) {
    const stats = fs.statSync(requested);
    if (stats.isDirectory()) {
      const indexFile = path.join(requested, "index.html");
      return fs.existsSync(indexFile) ? indexFile : null;
    }
    return stats.isFile() ? requested : null;
  }

  if (!path.extname(requested)) {
    const htmlFile = `${requested}.html`;
    if (fs.existsSync(htmlFile) && fs.statSync(htmlFile).isFile()) {
      return htmlFile;
    }
  }

  return null;
}

const server = http.createServer((request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end("Método no permitido");
    return;
  }

  let pathname;
  try {
    pathname = decodeURIComponent(
      new URL(request.url || "/", "http://localhost").pathname,
    );
  } catch {
    response.writeHead(400);
    response.end("Solicitud incorrecta");
    return;
  }

  const filePath = resolveFile(pathname);
  if (filePath) {
    sendFile(request, response, filePath);
    return;
  }

  const notFound = path.join(root, "404.html");
  if (fs.existsSync(notFound)) {
    sendFile(request, response, notFound, 404);
    return;
  }

  response.writeHead(404);
  response.end("No encontrado");
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Domoteknik disponible en el puerto ${port}`);
});

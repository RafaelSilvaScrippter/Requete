import { writeFileSync } from "fs";
import { createServer } from "http";

export function servidor() {
  const server = createServer((req, res) => {
    if (req.method === "POST" && req.url === "/upload") {
      const chunks = [];
      const name = req.headers["x-filename"];

      req.on("data", (chunk) => {
        chunks.push(chunk);
      });

      req.on("end", () => {
        const buffer = Buffer.concat(chunks);
        writeFileSync(`./db/${name}`, buffer, (err) => {
          if (err) {
            console.log("um erro ocorreu");
          }
        });
      });

      res.writeHead(200, { "Content-Type": "application/octet/stream" });
      res.end(JSON.stringify({ ok: true }));
      return;
    }

    res.writeHead(404);
    res.end();
  });

  server.listen(3001, () => {
    console.log("servidor rodando");
  });
  return server;
}

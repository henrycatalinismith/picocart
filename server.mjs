import express from "express";
import next from "next";
import path from "path";

async function main() {
  const port = parseInt(process.env.PORT, 10) || 3000
  const dev = process.env.NODE_ENV !== "production"
  const app = next({ dev })
  const handle = app.getRequestHandler()

  await app.prepare()
  const server = express()

  server.get("/robots.txt", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "robots.txt"))
  })

  server.get("*", (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
}

main()


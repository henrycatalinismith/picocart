import express from "express"
import Sequelize from "sequelize"
import fs from "fs"
import next from "next"
import path from "path"
import models from './models'

const dir = path.resolve("./static")
const files = fs.readdirSync(dir)

async function main() {
  const port = parseInt(process.env.PORT, 10) || 3000
  const dev = process.env.NODE_ENV !== "production"
  const app = next({ dev })
  const handle = app.getRequestHandler()

  await app.prepare()
  const server = express()

  files.forEach(filename => {
    server.get(`/${filename}`, (req, res) => {
      console.log(`/${filename}`)
      res.sendFile(path.resolve(`./static/${filename}`))
    })
  })

  server.get("/service-worker.js", (req, res) => {
    res.sendFile(path.resolve("./.next/service-worker.js"))
  })

  server.get("/db", async (req, res) => {
    const sequelize = new Sequelize(process.env.DATABASE_URL)
    await sequelize.authenticate()
    const users = await models.User.findAll()
    res.send(`lol ${users.length}`)
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


import express from "express"
import Sequelize from "sequelize"
import next from "next"
import path from "path"
import models from './models'

async function main() {
  const port = parseInt(process.env.PORT, 10) || 3000
  const dev = process.env.NODE_ENV !== "production"
  const app = next({ dev })
  const handle = app.getRequestHandler()

  await app.prepare()
  const server = express()

  server.get("/robots.txt", (req, res) => {
    res.sendFile(path.resolve("./static/robots.txt"))
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


import routes from "next-routes"

export default routes()

  .add({
    name: "index",
    pattern: "/",
    page: "index"
  })

  .add({
    name: "install",
    pattern: "/install",
    page: "install"
  })

  .add({
    name: "studio-index",
    pattern: "/studio",
    page: "studio-index"
  })

  .add({
    name: "studio-editor",
    pattern: "/studio/:id",
    page: "studio-editor"
  })


import Dexie from "dexie"
import _ from "lodash"
import { createMiddleware } from "../signalbox"
import actions from "../actions"

let db

const middleware = createMiddleware((before, after) => ({
  [before(actions.PAGE_LOAD)]: (store, action) => {
    db = new Dexie("picocart")
    db.version(1).stores({
      carts: "++id,createdAt,updatedAt,name,code",
    })

    db.carts.toArray().then(carts => {
      const loaded = _.keyBy(carts, "id")

      loaded.example = {
        id: "example",
        createdAt: new Date,
        updatedAt: new Date,
        name: "example",
        code: ([
          "line(0, 0, 128, 128, 12)",
          "line(0, 128, 128, 0, 14)",
        ]).join("\n"),
      }

      store.dispatch(actions.loadCarts(loaded))
    })
  },
}))

export default middleware



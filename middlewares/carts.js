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
      action.carts = _.keyBy(carts, "id")
    })
  },
}))

export default middleware



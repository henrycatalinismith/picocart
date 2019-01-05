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

    db.version(2).stores({
      carts: "++id,createdAt,updatedAt,name,lua,js,png",
    }).upgrade(tx => {
      return tx.carts.toCollection().modify(cart => {
        cart.lua = cart.code
      });
    })

    db.carts.count().then(n => {
      console.log(n)

      if (n === 0) {
        return db.carts.bulkPut([

          {
            id: "example1",
            createdAt: new Date,
            updatedAt: new Date,
            name: "example 1",
            lua: ([
              "line(0, 0, 127, 127, 12)",
              "line(0, 127, 127, 0, 14)",
            ]).join("\n"),
          },

          {
            id: "example2",
            createdAt: new Date,
            updatedAt: new Date,
            name: "example 2",
            lua: ([
              "line(63, 0, 63, 127, 12)",
              "line(0, 63, 127, 63, 8)",
            ]).join("\n"),
          }

        ])
      }

    }).then(() => {
      return db.carts.toArray()
    }).then(carts => {
      const loaded = _.keyBy(carts, "id")
      store.dispatch(actions.loadCarts(loaded))
    })
  },

  [after(actions.CREATE_CART)]: (store, action) => {
    const { carts } = store.getState()
    const cart = carts[action.cart.id]
    db.carts.put(cart)
  },

  [after(actions.UPDATE_CART)]: (store, action) => {
    const { carts } = store.getState()
    const cart = carts[action.cart.id]
    db.carts.put(cart)
  },

  [after(actions.DELETE_CART)]: (store, action) => {
    db.carts.delete(action.cart.id)
  },

  [after(actions.CHANGE_CODE)]: (store, action) => {
    const { carts } = store.getState()
    const cart = carts[action.cart.id]
    db.carts.put(cart)
  },
}))

export default middleware



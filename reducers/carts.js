import { createReducer } from "../signalbox";
import actions from "../actions"

const updateAll = (carts, action) => {
  return {
    ...carts,
    ...action.carts,
  }
}

const insertOne = (carts, action) => {
  return {
    ...carts,
    [action.cart.id]: {
      ...action.cart,
    }
  }
}

const updateOne = (carts, action) => {
  return {
    ...carts,
    [action.cart.id]: {
      ...carts[action.cart.id],
      ...action.cart,
    }
  }
}

export default createReducer({}, {
  [actions.PAGE_LOAD]: updateAll,
  [actions.LOAD_CARTS]: updateAll,
  [actions.CHANGE_CODE]: updateOne,
  [actions.CREATE_CART]: insertOne,
  [actions.UPDATE_CART]: updateOne,
})

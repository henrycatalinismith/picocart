import { createReducer } from "../signalbox";
import actions from "../actions"

const updateAll = (carts, action) => {
  return {
    ...carts,
    ...action.carts,
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
})

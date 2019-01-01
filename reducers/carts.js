import { createReducer } from "../signalbox";
import actions from "../actions"

const update = (carts, action) => {
  return {
    ...carts,
    ...action.carts,
  }
}

export default createReducer({}, {
  [actions.PAGE_LOAD]: update,
})

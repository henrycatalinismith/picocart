import { createReducer } from "../signalbox";
import actions from "../actions"

const updateAll = (engine, action) => {
  return {
    ...engine,
    ...action.engine,
  }
}

export default createReducer({}, {
  [actions.PAGE_REQUEST]: updateAll,
})


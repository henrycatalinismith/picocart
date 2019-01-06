import { createReducer } from "../signalbox";
import actions from "../actions"

const updateAll = (viewport, action) => {
  return {
    ...viewport,
    ...action.viewport,
  }
}

export default createReducer({}, {
  [actions.PAGE_LOAD]: updateAll,
  [actions.RESIZE_VIEWPORT]: updateAll,
})

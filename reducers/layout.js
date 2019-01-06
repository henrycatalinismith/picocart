import { createReducer } from "../signalbox";
import actions from "../actions"

const updateAll = (layout, action) => {
  return {
    ...layout,
    ...action.layout,
  }
}

export default createReducer({}, {
  [actions.PAGE_LOAD]: updateAll,
  [actions.RESIZE_VIEWPORT]: updateAll,
  [actions.UPDATE_LAYOUT]: updateAll,
  [actions.MOVE_RESIZER]: updateAll,
})

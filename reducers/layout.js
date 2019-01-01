import { createReducer } from "../signalbox";
import actions from "../actions"

const update = (layout, action) => {
  return {
    ...layout,
    ...action.layout,
  }
}

export default createReducer({}, {
  [actions.PAGE_LOAD]: update,
  [actions.RESIZE_VIEWPORT]: update,
  [actions.UPDATE_LAYOUT]: update,
  [actions.MOVE_RESIZER]: update,
})

import { createReducer } from "../signalbox";
import actions from "../actions"

const updateAll = (content, action) => {
  return {
    ...content,
    ...action.content,
  }
}

export default createReducer({}, {
  [actions.PAGE_LOAD]: updateAll,
  [actions.RESIZE_VIEWPORT]: updateAll,
})

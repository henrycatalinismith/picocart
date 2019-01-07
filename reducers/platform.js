import { createReducer } from "../signalbox";
import actions from "../actions"

const updateAll = (platform, action) => {
  return {
    ...platform,
    ...action.platform,
  }
}

export default createReducer({}, {
  [actions.PAGE_REQUEST]: updateAll,
})


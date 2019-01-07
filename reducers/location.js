import { createReducer } from "../signalbox";
import actions from "../actions"

const updateAll = (location, action) => {
  return {
    ...location,
    ...action.location,
  }
}

export default createReducer({}, {
  [actions.PAGE_REQUEST]: updateAll,
})

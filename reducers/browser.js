import { createReducer } from "../signalbox";
import actions from "../actions"

const updateAll = (browser, action) => {
  return {
    ...browser,
    ...action.browser,
  }
}

export default createReducer({}, {
  [actions.PAGE_REQUEST]: updateAll,
})

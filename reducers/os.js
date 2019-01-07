import { createReducer } from "../signalbox";
import actions from "../actions"

const updateAll = (os, action) => {
  return {
    ...os,
    ...action.os,
  }
}

export default createReducer({}, {
  [actions.PAGE_REQUEST]: updateAll,
})


import { createReducer } from "../signalbox";
import actions from "../actions"

export const reducer = createReducer({}, {
  [actions.PAGE_LOAD](layout, action) {
    return {
      ...layout,
      ...action.layout,
    }
  },
})

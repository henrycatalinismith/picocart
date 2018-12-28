import { createReducer } from "../signalbox";
import actions from "../actions"

export default createReducer({}, {
  [actions.APP_MODE](layout, action) {
    return {
      ...layout,
      mode: "app",
      stage: true,
      toolshed: true,
    }
  },

  [actions.DOCUMENT_MODE](layout, action) {
    return {
      ...layout,
      mode: "document",
      stage: false,
      toolshed: false,
    }
  },

  [actions.PAGE_LOAD](layout, action) {
    return {
      ...layout,
      ...action.layout,
    }
  },
})

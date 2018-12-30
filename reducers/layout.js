import { createReducer } from "../signalbox";
import actions from "../actions"

export default createReducer({}, {
  [actions.APP_MODE](layout, action) {
    return {
      ...layout,
      mode: "app",
      stage: true,
      toolbox: true,
    }
  },

  [actions.DOCUMENT_MODE](layout, action) {
    return {
      ...layout,
      mode: "document",
      stage: false,
      toolbox: false,
    }
  },

  [actions.PAGE_LOAD](layout, action) {
    return {
      ...layout,
      ...action.layout,
    }
  },

  [actions.RESIZE_VIEWPORT](layout, action) {
    return {
      ...layout,
      ...action.layout,
    }
  },

  [actions.UPDATE_LAYOUT](layout, action) {
    return {
      ...layout,
      ...action.layout,
    }
  },

  [actions.MOVE_RESIZER](layout, action) {
    return {
      ...layout,
      ...action.layout,
    }
  },
})

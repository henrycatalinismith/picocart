import { createReducer } from "../signalbox";
import actions from "../actions"

export default createReducer({}, {
  [actions.CHANGE_CODE](editor, action) {
    return {
      ...editor,
      ...action.editor,
    }
  },
})


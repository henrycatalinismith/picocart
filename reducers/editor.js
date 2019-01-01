import { createReducer } from "../signalbox";
import actions from "../actions"

const update = (editor, action) => {
  return {
    ...editor,
    ...action.editor,
  }
}

export default createReducer({}, {
  [actions.CHANGE_CODE]: update,
})


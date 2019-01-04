import { createReducer } from "../signalbox";
import actions from "../actions"

const update = (editor, action) => {
  return {
    ...editor,
    ...action.editor,
  }
}

export default createReducer({}, {
  [actions.EDIT_CART]: update,
  [actions.CHANGE_CODE]: update,
})


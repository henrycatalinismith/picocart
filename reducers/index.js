import { combineReducers } from "redux"
import editor from "./editor"
import emulator from "./emulator"
import layout from "./layout"

export default combineReducers({
  editor,
  emulator,
  layout,
})

import { combineReducers } from "redux"

import carts from "./carts"
import editor from "./editor"
import emulator from "./emulator"
import layout from "./layout"

export default combineReducers({
  carts,
  editor,
  emulator,
  layout,
})

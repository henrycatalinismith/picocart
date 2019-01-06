import { combineReducers } from "redux"

import carts from "./carts"
import content from "./content"
import editor from "./editor"
import emulator from "./emulator"
import layout from "./layout"
import viewport from "./viewport"

export default combineReducers({
  carts,
  content,
  editor,
  emulator,
  layout,
  viewport,
})

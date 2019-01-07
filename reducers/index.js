import { combineReducers } from "redux"

import browser from "./browser"
import carts from "./carts"
import content from "./content"
import editor from "./editor"
import emulator from "./emulator"
import engine from "./engine"
import layout from "./layout"
import os from "./os"
import platform from "./platform"
import viewport from "./viewport"

export default combineReducers({
  browser,
  carts,
  content,
  editor,
  emulator,
  engine,
  layout,
  os,
  platform,
  viewport,
})

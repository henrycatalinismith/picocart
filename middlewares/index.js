import { createMiddleware } from "../signalbox";

import carts from "./carts"
import editor from "./editor"
import emulator from "./emulator"
import layout from "./layout"

export default createMiddleware([
  carts,
  editor,
  emulator,
  layout,
]);


import { createMiddleware } from "../signalbox";

import editor from "./editor"
import emulator from "./emulator"
import layout from "./layout"

export default createMiddleware([
  editor,
  emulator,
  layout,
]);


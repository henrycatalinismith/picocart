import { createMiddleware } from "../signalbox";

import emulator from "./emulator"
import layout from "./layout"

export default createMiddleware([
  emulator,
  layout,
]);


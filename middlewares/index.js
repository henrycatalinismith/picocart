import { createMiddleware } from "../signalbox";

import browser from "./browser"
import emulator from "./emulator"
import layout from "./layout"

export default createMiddleware([
  browser,
  emulator,
  layout,
]);


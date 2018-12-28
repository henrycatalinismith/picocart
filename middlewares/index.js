import { createMiddleware } from "../signalbox";

import browser from "./browser"
import layout from "./layout"

export default createMiddleware([
  browser,
  layout,
]);


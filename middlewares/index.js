import { createMiddleware } from "../signalbox";

import bowser from "./bowser"
import carts from "./carts"
import content from "./content"
import editor from "./editor"
import emulator from "./emulator"
import layout from "./layout"
import location from "./location"
import scroll from "./scroll"
import viewport from "./viewport"

export default createMiddleware([
  bowser,
  viewport,
  content,
  carts,
  editor,
  emulator,
  layout,
  location,
  scroll,
]);


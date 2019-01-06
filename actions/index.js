import carts from "./carts"
import editor from "./editor"
import emulator from "./emulator"
import layout from "./layout"
import viewport from "./viewport"

const actions = {
  ...carts,
  ...editor,
  ...emulator,
  ...layout,
  ...viewport,
};

export default actions;


import carts from "./carts"
import editor from "./editor"
import emulator from "./emulator"
import layout from "./layout"

const actions = {
  ...carts,
  ...editor,
  ...emulator,
  ...layout,
};

export default actions;


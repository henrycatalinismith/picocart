import carts from "./carts"
import editor from "./editor"
import emulator from "./emulator"
import layout from "./layout"
import page from "./page"
import viewport from "./viewport"

const actions = {
  ...carts,
  ...editor,
  ...emulator,
  ...layout,
  ...page,
  ...viewport,
};

export default actions;


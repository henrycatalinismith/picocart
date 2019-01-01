import editor from "./editor"
import emulator from "./emulator"
import layout from "./layout"

const actions = {
  ...editor,
  ...emulator,
  ...layout,
};

export default actions;


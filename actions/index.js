import browser from "./browser"
import editor from "./editor"
import emulator from "./emulator"
import layout from "./layout"

const actions = {
  ...browser,
  ...editor,
  ...emulator,
  ...layout,
};

export default actions;


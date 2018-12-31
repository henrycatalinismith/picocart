import browser from "./browser"
import emulator from "./emulator"
import layout from "./layout"

const actions = {
  ...browser,
  ...emulator,
  ...layout,
};

export default actions;


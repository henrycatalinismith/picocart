import { createActions } from "../signalbox";

export default createActions([
  "MOVE_RESIZER",
  "PAGE_LOAD",
  "UPDATE_LAYOUT",
], types => ({
  moveResizer: (x, y) => ({
    type: types.MOVE_RESIZER,
    x,
    y,
  }),

  pageLoad: () => ({
    type: types.PAGE_LOAD,
    layout: {},
    carts: {},
  }),

  updateLayout: layout => ({
    type: types.UPDATE_LAYOUT,
    layout,
  }),
}));


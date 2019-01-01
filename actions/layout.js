import { createActions } from "../signalbox";

export default createActions([
  "MOVE_RESIZER",
  "PAGE_LOAD",
  "RESIZE_VIEWPORT",
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
  }),

  resizeViewport: (viewportWidth, viewportHeight) => ({
    type: types.RESIZE_VIEWPORT,
    layout: {
      viewportWidth,
      viewportHeight,
    }
  }),

  updateLayout: layout => ({
    type: types.UPDATE_LAYOUT,
    layout,
  }),
}));


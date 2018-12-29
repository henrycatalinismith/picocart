import { createActions } from "../signalbox";

export default createActions([
  "PAGE_LOAD",
  "RESIZE_VIEWPORT",
], types => ({
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
}));


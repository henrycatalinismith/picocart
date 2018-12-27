import { createActions } from "../signalbox";

export default createActions([
  "DETECT_VIEWPORT",
], types => ({
  detectViewport: (viewportWidth, viewportHeight) => ({
    type: types.DETECT_VIEWPORT,
    viewportWidth,
    viewportHeight,
  }),
}));


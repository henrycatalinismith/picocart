import { createActions } from "../signalbox";

export default createActions([
  "APP_MODE",
  "DOCUMENT_MODE",
  "MOVE_RESIZER",
], types => ({
  appMode: () => ({
    type: types.APP_MODE,
    layout: {},
  }),

  documentMode: () => ({
    type: types.DOCUMENT_MODE,
    layout: {},
  }),

  moveResizer: (x, y) => ({
    type: types.MOVE_RESIZER,
    x,
    y,
  }),
}));


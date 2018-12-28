import { createActions } from "../signalbox";

export default createActions([
  "APP_MODE",
  "DOCUMENT_MODE",
], types => ({
  appMode: () => ({
    type: types.APP_MODE,
    layout: {},
  }),

  documentMode: () => ({
    type: types.DOCUMENT_MODE,
    layout: {},
  }),
}));


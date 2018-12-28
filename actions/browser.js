import { createActions } from "../signalbox";

export default createActions([
  "PAGE_LOAD",
], types => ({
  pageLoad: () => ({
    type: types.PAGE_LOAD,
    layout: {},
  }),
}));


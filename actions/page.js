import { createActions } from "../signalbox";

export default createActions([
  "PAGE_REQUEST",
], types => ({

  pageRequest: request => ({
    type: types.PAGE_REQUEST,
    request,
  }),

}))



import { createActions } from "../signalbox";

export default createActions([
  "CHANGE_CODE",
], types => ({
  changeCode: code => ({
    type: types.CHANGE_CODE,
    editor: {
      code,
    }
  }),
}));



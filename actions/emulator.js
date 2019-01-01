import { createActions } from "../signalbox";

export default createActions([
  "START_EMULATOR",
], types => ({
  startEmulator: () => ({
    type: types.START_EMULATOR,
    editor: {},
    emulator: {},
  }),
}));


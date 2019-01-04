import { createActions } from "../signalbox";

export default createActions([
  "START_EMULATOR",
  "STOP_EMULATOR",
], types => ({
  startEmulator: () => ({
    type: types.START_EMULATOR,
    emulator: {
      status: "busy",
    },
  }),

  stopEmulator: () => ({
    type: types.STOP_EMULATOR,
    emulator: {
      status: "idle",
    },
  }),
}));


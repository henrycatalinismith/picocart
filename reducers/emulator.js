import { createReducer } from "../signalbox";
import actions from "../actions"

const update = (emulator, action) => {
  return {
    ...emulator,
    ...action.emulator,
  }
}

export default createReducer({}, {
  [actions.START_EMULATOR]: update,
  [actions.STOP_EMULATOR]: update,
})

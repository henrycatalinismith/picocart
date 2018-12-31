import { createMiddleware } from "../signalbox"
import actions from "../actions"

const middleware = createMiddleware((before, after) => ({
  [after(actions.START_EMULATOR)](store, action) {
    alert("go")
  },
}))

export default middleware


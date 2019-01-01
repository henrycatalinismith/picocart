import { createMiddleware } from "../signalbox"
import actions from "../actions"

const middleware = createMiddleware((before, after) => ({
  // 😇
}))

export default middleware


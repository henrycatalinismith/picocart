import { createMiddleware } from "../signalbox"
import actions from "../actions"

const scrollBack = () => {
  if (typeof window === "undefined") {
    return
  }
  if (typeof window.scrollTo === "undefined") {
    return
  }
  setTimeout(() => window.scrollTo(0, 0), 50)
}

const middleware = createMiddleware((before, after) => ({
  [after(actions.PAGE_LOAD)]: scrollBack,
  [after(actions.RESIZE_VIEWPORT)]: scrollBack,
  [after(actions.MOVE_RESIZER)]: scrollBack,
}))

export default middleware


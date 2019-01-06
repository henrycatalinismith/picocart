import { createMiddleware } from "../signalbox"
import actions from "../actions"

const readDimensions = (store, action) => {
  const element = document.querySelector(".content")
  const width = element.offsetWidth
  const height = element.offsetHeight
  action.content = { width, height }
}

export default createMiddleware((before, after) => ({
  [before(actions.PAGE_LOAD)]: readDimensions,
  [before(actions.RESIZE_VIEWPORT)]: readDimensions,
}))


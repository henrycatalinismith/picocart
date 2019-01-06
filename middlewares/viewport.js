import { createMiddleware } from "../signalbox"
import actions from "../actions"

const innerHeight = typeof window === "undefined"
  ? () => {}
  : require("ios-inner-height")

export default createMiddleware((before, after) => ({
  [before(actions.PAGE_LOAD)](store, action) {
    const iOS = window.navigator.userAgent.match(/(iPad|iPhone|iPod)/g)

    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    if (iOS) {
      require("inobounce")
      viewport.height = innerHeight()
    }

    action.viewport = viewport
  },
}))


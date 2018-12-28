import { createMiddleware } from "../signalbox";
import actions from "../actions"

const middleware = createMiddleware((before, after) => ({
  [before(actions.PAGE_LOAD)](store, action) {
    action.layout.headerWidth = window.innerWidth;
    action.layout.viewportWidth = window.innerWidth;
    action.layout.viewportHeight = window.innerHeight;
  }
}))

export default middleware


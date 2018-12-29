import { createMiddleware } from "../signalbox";
import actions from "../actions"

const middleware = createMiddleware((before, after) => ({
  [before(actions.PAGE_LOAD)](store, action) {
    if (window.location.pathname !== "/cart") {
      return
    }

    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    const header = document.querySelector(".header")
    const headerWidth = header.offsetWidth
    const headerHeight = header.offsetHeight

    const stage = document.querySelector(".stage")
    const stageWidth = stage.offsetWidth
    const stageHeight = stage.offsetHeight

    const toolbox = document.querySelector(".toolbox")
    const toolboxWidth = toolbox.offsetWidth
    const toolboxHeight = toolbox.offsetHeight

    action.layout = {
      headerWidth,
      stageWidth,
      stageHeight,
      toolboxWidth,
      toolboxHeight,
      viewportWidth,
      viewportHeight,
    }
  }
}))

export default middleware

